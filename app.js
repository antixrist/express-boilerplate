const fs                = require('fs');
const express           = require('express');
const path              = require('path');
const logger            = require('morgan');
const fileStreamRotator = require('file-stream-rotator');
const cookieParser      = require('cookie-parser');
const bodyParser        = require('body-parser');
const compression       = require('compression');
const forceDomain       = require('forcedomain');
const timeout           = require('connect-timeout');
const basicAuth         = require('basic-auth');
const responseTime      = require('response-time');
const expressRedirect   = require('express-redirect');
const vhost             = require('vhost');
const routes            = require('./routes/index');
const users             = require('./routes/users');
const debug             = require('debug')('app:server');

const redirects = {
  // external 301 redirects
};
const rewrites = {
  // internal redirects
};

const app = express();
debug(`Setup ${app.get('env')} server`);

app.set('strict routing', true);
app.set('x-powered-by', false);
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// seo
app.use(function (req, res, next) {
  let url = req.url;
  if (url !== '/' && /\/$/.test(url)) {
    url = url
      .replace(/^\/+/, '/')
      .replace(/\/+$/, '')
    ;
  }
  if (/\.html$/.test(url)) {
    url = url.replace(/\.html$/, '');
  }
  if (/[A-Z]/.test(url)) {
    url = url.toLowerCase();
  }

  if (url != req.url) {
    return res.redirect(301, url);
  }
  return next();
});

app.use(vhost('api.localhost', function (req, res) {
  // handle req + res belonging to mail.example.com
  res.send('is api host');
}));

app.use(forceDomain({
  hostname: 'localhost',
  port: app.get('port'),
  // protocol: 'https'
}));

expressRedirect(app);

Object.keys(redirects).forEach(from => {
  let to = redirects[from];
  app.redirect(from, to, 301, true);
});

Object.keys(rewrites).forEach(from => {
  let to = rewrites[from];
  app.use(rewrite(from, to));
});
// /seo

// const favicon = require('serve-favicon');
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

if (app.get('env') != 'production') {
  app.use(logger('dev'));
} else {
  let logDirectory = __dirname + '/logs';
  !fs.accessSync(logDirectory) || fs.mkdirSync(logDirectory);

  app.use(logger('common', {
    stream: fileStreamRotator.getStream({
      frequency:   'daily',
      date_format: 'YYYYMMDD',
      filename:    path.join(logDirectory, 'access-%DATE%.log'),
      verbose:     false
    })
  }));
}

if (app.get('env') == 'production') {
  app.use(function (req, res, next) {
    var credentials = basicAuth(req);
    if (!credentials || credentials.name !== 'admin' || credentials.pass !== 'pass') {
      res.statusCode = 401;
      res.set('WWW-Authenticate', 'Basic realm="Authentication Required"');
      res.end('Access denied');
    } else {
      next();
    }
  });
}

// app.use(timeout(15000));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
app.use(require('node-sass-middleware')({
  src:            path.join(__dirname, 'public'),
  dest:           path.join(__dirname, 'public'),
  indentedSyntax: false,
  sourceMap:      true
}));
app.use(compression({filter: function shouldCompress (req, res) {
  return req.headers['x-no-compression'] ? false : compression.filter(req, res);
}}));
app.use(responseTime());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err    = new Error('Not Found');
  err.status = 404;
  next(err);
});

// development error handler
// will print stacktrace
if (app.get('env') != 'production') {
  app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error:   err
    });
  });
} else {
  app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error:   {} // no stacktraces
    });
  });
}

module.exports = app;
