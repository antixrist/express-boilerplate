import _                 from 'lodash';
import fs                from 'fs';
import express           from 'express';
import path              from 'path';
import pathExists        from 'path-exists';
import cookieParser      from 'cookie-parser';
import bodyParser        from 'body-parser';
import compression       from 'compression';
import forceDomain       from 'forcedomain';
import timeout           from 'connect-timeout';
import basicAuth         from 'basic-auth';
import responseTime      from 'response-time';
import redirect          from 'express-redirect';
import rewrite           from 'express-urlrewrite';
import vhost             from 'vhost';
import logger            from 'morgan';
import fileStreamRotator from 'file-stream-rotator';
import Debug             from 'debug';
import * as routes       from './routes';
import {toArray}         from './utils';
import {seo}             from './middlewares';
import {
  cookieSecret,
  redirects,
  rewrites,
  express as expressConfig
} from './config';

const app = express();
const cwd = process.cwd();
const debug = Debug('app:server');
const isProduction = app.get('env') == 'production';

debug(`Setup ${app.get('env')} server`);

// setup express instance
if (_.isPlainObject(expressConfig.set)) {
  _.forEach(expressConfig.set, (val, key) => app.set(key, val));
}

// setup app's locals
if (_.isPlainObject(expressConfig.locals)) {
  _.assign(app.locals, expressConfig.locals);
}

// seo
redirect(app);

app.use(seo({
  toLower: true,
  removeHtmlSuffix: true,
  removeTrailingSlash: true
}));
app.use(vhost('api.localhost', function (req, res) {
  // handle req + res belonging to api.localhost
  res.send('is api host');
}));

app.use(forceDomain({
  hostname: 'localhost',
  port: app.get('port'),
  // protocol: 'https'
}));

Object.keys(redirects).forEach(from => {
  let to = redirects[from];
  app.redirect(from, to, 301, true);
});

Object.keys(rewrites).forEach(from => {
  let to = rewrites[from];
  app.use(rewrite(from, to));
});
// /seo

if (!isProduction) {
  app.use(logger('dev'));
} else {
  let logDirectory = path.join(cwd, '/logs');
  !pathExists.sync(logDirectory) && fs.mkdirSync(logDirectory);

  app.use(logger('common', {
    stream: fileStreamRotator.getStream({
      frequency:   'daily',
      date_format: 'YYYYMMDD',
      filename:    path.join(logDirectory, 'access-%DATE%.log'),
      verbose:     false
    })
  }));
}

if (!!expressConfig.basicAuth) {
  let allowedCredentials = toArray(expressConfig.basicAuth);
  app.use(function (req, res, next) {
    let credentials = basicAuth(req);
    if (!credentials || !_.find(allowedCredentials, credentials)) {
      res.statusCode = 401;
      res.set('WWW-Authenticate', 'Basic realm="Authentication Required"');
      res.render('403');
    } else {
      next();
    }
  });
}

// app.use(timeout(15000));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
// app.use(require('node-sass-middleware')({
//   src:            path.join(cwd, 'public'),
//   dest:           path.join(cwd, 'public'),
//   indentedSyntax: false,
//   sourceMap:      true
// }));
app.use(responseTime());
app.use(express.static(path.join(cwd, 'public'), expressConfig.static));
app.use(compression({filter (req, res) {
  return req.headers['x-no-compression'] ? false : compression.filter(req, res);
}}));


app.use('/', routes.app);
app.use('/users', routes.users);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err    = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error:   app.get('env') != 'production' ? err : {}
  });
});

export default app;
