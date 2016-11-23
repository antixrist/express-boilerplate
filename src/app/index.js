import _                 from 'lodash';
import fs                from 'fs';
import express           from 'express';
import path              from 'path';
import uuid              from 'node-uuid';
import pathExists        from 'path-exists';
import cookieParser      from 'cookie-parser';
import bodyParser        from 'body-parser';
import compression       from 'compression';
import morgan            from 'morgan';
import basicAuth         from 'basic-auth';
import responseTime      from 'response-time';
import httpError         from 'http-errors';
import helmet            from 'helmet';
import forceDomain       from 'forcedomain';
import timeout           from 'connect-timeout';
import redirect          from 'express-redirect';
import rewrite           from 'express-urlrewrite';
import vhost             from 'vhost';
import fileStreamRotator from 'file-stream-rotator';
import {inspect}         from 'util';
import Debug             from 'debug';
import config            from '../config';
import {toArray, logger} from '../utils';
import routes            from './routes';
import {seo}             from './middlewares';

const app = express();
const cwd = process.cwd();
const debug = Debug('app:server');
const isDevelopment = app.get('env') == 'development';

debug(`Setup ${app.get('env')} server`);

/**
 * Устанавливаем настройки всего приложения
 */
_.forEach(config.get('express') || {}, (val, key) => app.set(key, val));

/**
 * Устанавливаем переменные для шаблонов, которые будут доступны всегда
 * (если их не перезаписывать)
 */
_.merge(app.locals, config.get('locals') || {});

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
app.use(express.static(path.join(cwd, 'public'), config.get('static')));

/**
 * Логирование запросов
 * todo: подумать над форматом логов
 */

/** сгенерируем для запроса уникальный id */
app.use((req, res, next) => {
  req.id = uuid.v4();
  next();
});

/** создадим токен для логгера с id-запроса */
morgan.token('id', req => req.id);
morgan.token('body', (req, res) => inspect(res.body));

setTimeout(function () {
  // throw new Error('something wrong!');
}, 100);

if (isDevelopment) {

} else {

}

app.use(morgan(':id :remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status ":referrer" ":user-agent"', {
  immediate: false,
  // skip: (req, res) => res.statusCode < 400
}));

// if (isDevelopment) {
//
// } else {
//
// }
//
// if (!isProduction) {
//   // app.use(morgan('dev'));
//   app.use(morgan(':id :remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent"', {
//     immediate: false
//   }));
// } else {
//   /** на продакшене логируем в файл, с суточной ротацией */
//   let logDirectory = path.join(cwd, '/logs');
//   !pathExists.sync(logDirectory) && fs.mkdirSync(logDirectory);
//
//   app.use(morgan('common', {
//     stream: fileStreamRotator.getStream({
//       frequency:   'daily',
//       date_format: 'YYYYMMDD',
//       filename:    path.join(logDirectory, 'access-%DATE%.log'),
//       verbose:     false
//     })
//   }));
// }

/**
 * Устанавливаем http-аутентификацию, если логины-пароли заданы в конфиге.
 * В конфиге можно задать несколько логинов/паролей.
 */
if (!!config.get('basicAuth')) {
  let allowedCredentials = toArray(config.get('basicAuth'));
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
  /** todo: logout косячный, нормально будет работать только если, слать сюда запрос из front-js */
  app.get('/logout', function (req, res, next) {
    res.set('WWW-Authenticate', 'Basic realm="Authentication Required"');
    req.user = {};
    res.status(401);
    // return res.render('redirect');
    return next(new httpError.Unauthorized());
  });
}

/**
 * Основные настройки - таймауты, парсеры тела запроса, кук
 */
// todo: ещё раз изучить connect-timeout
// app.use(timeout(15000));
/** Кукожим ответ */
app.use(compression({
  threshold: 128,
  filter (req, res) {
    return req.headers['x-no-compression'] ? false : compression.filter(req, res);
  }
}));
app.use(bodyParser.json({
  type: ['json', 'application/csp-report']
}));
app.use(bodyParser.urlencoded({extended: true}));
/** парсим печеньки в заголовках */
app.use(cookieParser(config.get('session:secret')));
/** добавляем заголовок с временем ответа */
app.use(responseTime());


/**
 * Настройки безопасности.
 * Если снаружи стоит nginx для статики, то надо продублировать там все эти настройки заголовков
 */

/** Запрет на показ в айфрейме (sameorigin - можно только с того же домена) */
config.get('security:frameguard') && app.use(helmet.frameguard(config.get('security:frameguard'))); // or { action: 'deny' }

/** пусть мамкины хакеры голову ломают */
config.get('security:hidePoweredBy') && app.use(helmet.hidePoweredBy(config.get('security:hidePoweredBy')));

/** установим "X-DNS-Prefetch-Control: off", чтобы браузеры (которые это умеют) не префетчили ip нашего домена */
config.get('security:dnsPrefetchControl') && app.use(helmet.dnsPrefetchControl(config.get('security:dnsPrefetchControl')));

/** для старых ишаков ставим "X-Download-Options: noopen", чтобы контент, который надо скачать, они не открывали в контексте сайта */
config.get('security:ieNoOpen') && app.use(helmet.ieNoOpen(config.get('security:ieNoOpen')));

/** ставим "X-Content-Type-Options: nosniff", чтобы браузер доверял посланным сервером миме-типам, блочил не совпадающие и не пытался угадывать миме по содежимому загруженных файлов (а то ещё начнёт выполнять то, чего выполнять не должен) */
config.get('security:noSniff') && app.use(helmet.noSniff(config.get('security:noSniff')));

/** устанавливаем "Referrer-Policy". Честно говоря лень разбираться во всех значениях: https://www.w3.org/TR/referrer-policy/#referrer-policies */
config.get('security:referrerPolicy') && app.use(helmet.referrerPolicy(config.get('security:referrerPolicy')));

/** и поставим "X-XSS-Protection: 1; mode=block" */
config.get('security:xssFilter') && app.use(helmet.xssFilter(config.get('security:xssFilter')));

/** если юзается ssl, то надо послать браузеру открытые ключи, чтобы он их сохранил и при последующих запросах оберегал юзера от скомпрометированных центров сертификации */
config.get('security:hpkp') && app.use(helmet.hpkp(config.get('security:hpkp')));

/** опять же, если юзается ssl. говорит браузеру ходить только по https */
config.get('security:hsts') && app.use(helmet.hsts(config.get('security:hsts')));

/** https://content-security-policy.com/ */
config.get('security:contentSecurityPolicy') && app.use(helmet.contentSecurityPolicy(config.get('security:contentSecurityPolicy')));

/** роут для приёма репортов о нарушении csp (нормальные браузеры будут слать сюда отчёты) */
/** csurf должен идти _после_ роута для приёма репортов */
/** todo: добавить дату в лог */
if (config.get('security:contentSecurityPolicy:directives:reportUri')) {
  app.post(config.get('security:contentSecurityPolicy:directives:reportUri'), function (req, res) {
    if (isDevelopment) {
      let body = req.body ? req.body : 'No data received!';
      logger.error(`CSP Violation: ${inspect(body)}`);
    } else {
      /** на продакшене логируем в файл, с суточной ротацией */
      let logDirectory = path.join(cwd, '/logs');
      !pathExists.sync(logDirectory) && fs.mkdirSync(logDirectory);
      
      /** todo: добавить генерацию логов */
      // app.use(morgan('csp', {
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
}

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

/** вот здесь можно настроить csurf */

/**
 * Пошли маршруты
 */
app.use('/', routes);
app.use('/admin', (req, res, next) => next(new httpError.Unauthorized()));
app.use('/admin/users', (req, res, next) => next(new httpError.Forbidden()));

/** Если дошли сюда, значит на запрос не нашлось нужного роута. Отправляем 404. */
app.use(function (req, res, next) {
  return next(new httpError.NotFound());
});

/**
 * Если дошли сюда - значит передана (либо поймана) ошибка.
 * todo: протестировать req.xhr
 */
/** если это http-ошибка */
app.use(function httpErrorsHandler (err, req, res, next) {
  if (res.headersSent) {
    // пусть express дальше сам разбирается
    return next(err);
  }
  
  if (!(err instanceof httpError.HttpError)) {
    return next(err);
  }
  
  if (res._header) {
    return req.socket.destroy();
  }

  let status = err.statusCode || res.statusCode || 500;
  // default status code to 500
  status = status < 400 ? 500 : status;

  if (req.xhr) {
    return res
      .status(status)
      .send({
        status:  status,
        // текстовый статус http-ошибки
        message: err.message,
      })
    ;
  }
  
  let viewName = '50x';
  switch (status) {
    case 401:
    case 403:
    case 404:
      viewName = status;
      break;
    default:
      viewName = (status < 500) ? '40x' : viewName;
      break;
  }
  
  /** рендерим `viewName` */
  res
    .status(status)
    .render(`errors/${viewName}`, {
      status:  status,
      message: err.message
    })
  ;
});

/** если это пойманное исключение */
/** todo: не нраица мне вся эта if-ветвистость */
app.use(function (err, req, res, next) {
  if (res.headersSent) {
    // пусть express дальше сам разбирается
    return next(err);
  }
  
  let clientErr = new httpError.InternalServerError();
  if (isDevelopment) {
    /** в режиме разработки выплёвываем пришедший эксепшн */
    logger.error(err.stack);
    if (req.xhr) {
      res
        .status(err.statusCode || clientErr.statusCode)
        .send({
          status:  err.statusCode || clientErr.statusCode,
          message: err.message,
          error:   err,
        })
      ;
    } else {
      res
        .status(err.statusCode || clientErr.statusCode)
        .render('errors/trace', {
          status:  err.statusCode || clientErr.statusCode,
          message: err.message,
          stack:   err.stack,
        })
      ;
    }
  } else {
    /** в режиме продакшна сам эксепшн пишем в лог, а выплёвываем стандартную 50x */
    logger.error(err.stack);
    if (req.xhr) {
      res
        .status(err.statusCode || clientErr.statusCode)
        .send({
          status:  clientErr.statusCode,
          message: clientErr.message
        })
      ;
    } else {
      res
        .status(clientErr.statusCode)
        .render('errors/50x', {
          status:  clientErr.statusCode,
          message: clientErr.message
        })
      ;
    }
  }
});

export { app };
