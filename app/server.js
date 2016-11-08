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
import httpError         from 'http-errors';
import helmet            from 'helmet';
import vhost             from 'vhost';
import logger            from 'morgan';
import fileStreamRotator from 'file-stream-rotator';
import Debug             from 'debug';
import routes            from './routes';
import {toArray}         from './utils';
import {seo}             from './middlewares';
import {
  cookies,
  // redirects,
  // rewrites,
  express as expressConfig
} from './config';

const app = express();
const cwd = process.cwd();
const debug = Debug('app:server');
const isProduction = app.get('env') == 'production';

debug(`Setup ${app.get('env')} server`);

/**
 * Устанавливаем настройки всего приложения
 */
if (_.isPlainObject(expressConfig.set)) {
  _.forEach(expressConfig.set, (val, key) => app.set(key, val));
}

/**
 * Устанавливаем переменные для шаблонов, которые будут доступны всегда
 * (если их не перезаписывать)
 */
if (_.isPlainObject(expressConfig.locals)) {
  _.assign(app.locals, expressConfig.locals);
}

/**
 * Немного seo-шной консистентности
 */
app.use(seo({
  toLower: true,
  removeHtmlSuffix: true,
  removeTrailingSlash: true
}));
// app.use(vhost('api.localhost', function (req, res) {
//   // handle req + res belonging to api.localhost
//   res.send('is api host');
// }));
//
// app.use(forceDomain({
//   hostname: 'localhost',
//   port: app.get('port'),
//   // protocol: 'https'
// }));

// redirect(app);
// Object.keys(redirects).forEach(from => {
//   let to = redirects[from];
//   app.redirect(from, to, 301, true);
// });
//
// Object.keys(rewrites).forEach(from => {
//   let to = rewrites[from];
//   app.use(rewrite(from, to));
// });
// /seo

/**
 * Шарим статику.
 * Настройка сессий должна идти после статики,
 * чтобы не создавать пустые сессии на каждый статичный файл.
 * Если нужны логи статики, то надо поместить эту мидлварю после логгирования.
 */
app.use(express.static(path.join(cwd, 'public'), expressConfig.static));

/**
 * Логирование запросов
 */
if (!isProduction) {
  // app.use(logger('dev'));
  app.use(logger('combined'));
} else {
  /** на продакшене логируем в файл, с суточной ротацией */
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

/**
 * Устанавливаем http-аутентификацию, если логины-пароли заданы в конфиге.
 * В конфиге можно задать несколько логинов/паролей.
 */
if (!!expressConfig.basicAuth) {
  let allowedCredentials = toArray(expressConfig.basicAuth);
  app.use(function (req, res, next) {
    req.user = {};

    let credentials = basicAuth(req);
    let user = credentials ? _.find(allowedCredentials, credentials) : null;
    if (!user) {
      res.statusCode = 401;
      res.set('WWW-Authenticate', 'Basic realm="Authentication Required"');
      return next(new httpError.Unauthorized());
    } else {
      req.user = user;
      next();
    }
  });

  /** todo: вынести логаут-урл http-аутентификации в конфиг */
  app.get('/logout', function (req, res) {
    res.set('WWW-Authenticate', 'Basic realm="Flush Authorization"');
    req.user = {};
    return res.sendStatus(401);
  });
}

/**
 * Основная настройка - таймауты, парсеры тела запроса, кук
 */
// todo: ещё раз изучить connect-timeout
// app.use(timeout(15000));
app.use(bodyParser.json({
  type: ['json', 'application/csp-report']
}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser(cookies.secret));
app.use(responseTime());


/**
 * Настройки безопасности.
 */

/** Запрет на показ в айфрейме (sameorigin - можно только с того же домена) */
app.use(helmet.frameguard({action: 'sameorigin'})); // or { action: 'deny' }

/** пусть мамкины хакеры голову ломают */
app.use(helmet.hidePoweredBy({ setTo: 'PHP 4.2.0' }));

/** установим "X-DNS-Prefetch-Control: off", чтобы браузеры (которые это умеют) не префетчили ip нашего домена */
app.use(helmet.dnsPrefetchControl());

/** для старых ишаков ставим "X-Download-Options: noopen", чтобы контент, который надо скачать, они не открывали в контекста сайта */
app.use(helmet.ieNoOpen());

/** ставим "X-Content-Type-Options: nosniff", чтобы браузер доверял посланным сервером миме-типам, блочил не совпадающие и не пытался угадывать миме по содежимому загруженных файлов (а то ещё начнёт выполнять то, чего выполнять не должен) */
app.use(helmet.noSniff());

/** устанавливаем "Referrer-Policy". Честно говоря лень разбираться во всех значениях: https://www.w3.org/TR/referrer-policy/#referrer-policies */
// app.use(helmet.referrerPolicy({ policy: 'same-origin' }));

/** и поставим "X-XSS-Protection: 1; mode=block" */
app.use(helmet.xssFilter());

/** если юзается ssl, то надо послать браузеру открытые ключи, чтобы он их сохранил и при последующих запросах оберегал юзера от скомпрометированных центрах сертификации */
app.use(helmet.hpkp({
  setIf (req, res) {
    return !!req.secure;
  },
  maxAge: 7776000, // ninety days in seconds
  sha256s: ['AbCdEf123=', 'ZyXwVu456='],
  includeSubdomains: true,
  reportUri: 'https://example.com/hpkp-report',
  reportOnly: false
}));

/** опять же, если юзается ssl. говорит браузеру ходить только по https */
app.use(helmet.hsts({
  // or `force: true`
  setIf (req, res) {
    return !!req.secure;
  },
  maxAge: 5184000, // sixty days in seconds
  includeSubDomains: true,
  preload: true
}));

/** csurf должен идти _после_ этого роута */
/** todo: вынести настройки csp в конфиг */
app.use(helmet.contentSecurityPolicy({
  directives: {
    defaultSrc: ["'self'", 'somecdn.com'],
    styleSrc: ["'self'", "'unsafe-inline'", 'maxcdn.bootstrapcdn.com'],
    imgSrc: ['img.com', 'data:'],
    // todo: печеньки не читаются. изучить про sandbox
    // sandbox: ['allow-forms', 'allow-scripts', 'allow-same-origin'],
    reportUri: '/report-csp-violation',
    objectSrc: ["'none'"], // An empty array allows nothing through
  },
  setAllHeaders: true,
  disableAndroid: true
}));
/** роут для приёма репортов о нарушении csp (нормальные браузеры будут слать сюда отчёты) */
app.post('/report-csp-violation', function (req, res) {
  if (!isProduction) {
    let body = req.body ? req.body : 'No data received!';
    console.error(`CSP Violation: ${body}`);
  } else {
    /** на продакшене логируем в файл, с суточной ротацией */
    let logDirectory = path.join(cwd, '/logs');
    !pathExists.sync(logDirectory) && fs.mkdirSync(logDirectory);

    /** todo: добавить генерацию логов */
    // app.use(logger('csp', {
    //   stream: fileStreamRotator.getStream({
    //     frequency:   'daily',
    //     date_format: 'YYYYMMDD',
    //     filename:    path.join(logDirectory, 'csp-%DATE%.log'),
    //     verbose:     false
    //   })
    // }));
  }

  res.status(204).end();
});


/**
 * Ну как бы можно включить парсинг sass'а на лету,
 * но как бы нехер говнокодить.
 */
// app.use(require('node-sass-middleware')({
//   src:            path.join(cwd, 'public'),
//   dest:           path.join(cwd, 'public'),
//   indentedSyntax: false,
//   sourceMap:      true
// }));

/**
 * Кукожим ответ
 */
app.use(compression({
  threshold: 128,
  filter (req, res) {
    return req.headers['x-no-compression'] ? false : compression.filter(req, res);
  }
}));

/**
 * Пошли маршруты
 */
app.use('/', routes);



/** Если дошли сюда, значит на запрос не нашлось нужного роута. Отправим 404. */
app.use(function (req, res, next) {
  return next(new httpError.NotFound());
});

/**
 * Если дошли сюда - значит пойманная/переданная ошибка.
 */
app.use(function (err, req, res, next) {
  // respect err.statusCode
  if (err.statusCode) {
    res.statusCode = err.statusCode
  }
  
  // respect err.status
  if (err.status) {
    res.statusCode = err.status
  }
  
  // default status code to 500
  if (res.statusCode < 400) {
    res.statusCode = 500
  }
  
  // cannot actually respond
  if (res._header) {
    return req.socket.destroy()
  }
  
  // todo логировать ошибки в файлы
  console.error(err);
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error:   app.get('env') != 'production' ? err : {}
  });
});

// todo
// https://nodejs.org/docs/latest/api/process.html#process_event_uncaughtexception
// process.on('uncaughtException', (err) => {
//   fs.writeSync(1, `Caught exception: ${err}`);
// });
// process.on('unhandledRejection', (reason, p) => {
//   console.log('Unhandled Rejection at: Promise', p, 'reason:', reason);
//   // application specific logging, throwing an error, or other logic here
// });

export default app;
