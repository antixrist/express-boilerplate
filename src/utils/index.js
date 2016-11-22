import _         from 'lodash';
import death     from 'death';
import tracer    from 'tracer';
import portastic from 'portastic';
import {inspect} from 'util';

/**
 * @param {*} something
 * @returns {Array}
 */
const toArray = function toArray (something = []) {
  let retVal = something;

  retVal = (!!retVal) ? retVal : [];
  retVal = (_.isArray(retVal)) ? retVal : [retVal];

  return retVal;
};

/**
 * @param min
 * @param max
 * @param step
 * @returns {Number|null}
 */
const findUnusedPort = async function findUnusedPort (min = 3000, max = 65535, step = 1000) {
  let ports = await portastic.find({
    min: min,
    max: max
  });

  return ports.length
    ? ports[0]
    : min < max
      ? await findUnusedPort(min + step, max, step)
      : null
  ;
};


/**
 * @param {function} cb
 */
const onShutdown = (cb) => onShutdown.handlers.push(cb);
onShutdown.handlers = [];

/** вешаем обработчик на смерть процесса */
death({
  uncaughtException: true,
  debug: false
})((signal, err) => {
  /** если нет кастомных обработчиков */
  if (!onShutdown.handlers.length) {
    /** выплёвываем в stderr ошибку, если она есть */
    err && console.error(err.stack);
  }
  /** а если есть кастомные обработчики */
  else {
    /** поочереди синхронно их выполняем */
    onShutdown.handlers.forEach(cb => cb(err, signal));
  }
  
  /**
   * руками убиваем процесс.
   * если есть ошибка, то ставим код завершения == `1`.
   * так внешние демоны смогут понять, что приложение именно упало, а не успешно завершилось.
   */
  process.exit(err ? 1 : 0);
});

/**
 * ловим необработанные promise-исключения.
 * если не надо, чтобы процесс умирал,
 * то подключить `loud-rejection` вместо `hard-rejection`.
 * тогда коллбек будет вызываться для каждого непойманного
 * исключения поочерёдно _в момент остановки процесса_!
 * (а не в момент выброса жтого исключения)
 *
 * В версиях ноды >7.0 использование `process.on('unhandledRejection')` выбрасывает DeprecationWarning.
 * Так что, в принципе, этот обработчик можно удалить и просто следить за тем,
 * чтобы во всех используемых промисах был установлен catch-обработчик.
 */
// require('hard-rejection')(onShutdownRunner);


var colors = require('colors/safe');
const logger = tracer.console({
  format: "{{timestamp}} <{{title}}> {{file}}:{{line}} ({{method}}) {{message}}",
  dateformat: "isoDateTime",
  preprocess: function(data) {
  },
  transport: function(data) {
    console.log(data.output);
  },
  filters: [{
    //log: do nothing
    trace: colors.magenta,
    debug: colors.cyan,
    info: colors.green,
    warn: colors.yellow,
    error: colors.red.bold
  }],
  level: 'log',
  methods: ['log', 'trace', 'debug', 'info', 'warn', 'error'],
  stackIndex: 0,
  inspectOpt: {
    depth: null
    // showHidden: true,
  }
});

let err = new Error('Something wrong!');
let obj = {
  Request: [
    {
      IsValid:           [true],
      ItemSearchRequest: [
        {
          ResponseGroup: ['Small', 'OfferSummary'],
          Sort:          ['salesrank'],
          SearchIndex:   ['DVD']
        }
      ]
    }
  ]
};
// obj.recurse = obj;


// logger.log(obj);
// logger.debug(err);
// logger.error(err);

// setInterval(() => {}, 100);

// setTimeout(() => {
//   throw new Error('Async wrong!');
// }, 2000);

// var logger1 = require('tracer').console({
//   stackIndex : 0 // default 0
// });
// var logger2 = require('tracer').console({
//   stackIndex : 1
// });
// var logMgr1 = function(type, msg) {
//   return logger1[type](msg);
// };
// var logMgr2 = function(type, msg) {
//   return logger2[type](msg);
// };
//
// logger1.log('hello'); // the line info is right
// logger2.log('hello'); // the line info is error
// logMgr1('log', 'hello'); // the line info is error
// logMgr2('log', 'hello'); // the line info is right


export {toArray, findUnusedPort, onShutdown};
