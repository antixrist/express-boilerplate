import _         from 'lodash';
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
obj.recurse = obj;


// logger.log(obj);
// logger.debug(err);
// logger.error(err);

// const onDeath = require('death')({
//   uncaughtException: true
// });
//
// onDeath((signal, err) => {
//   signal && logger.debug(signal);
//
//   if (err) {
//     logger.error(err);
//     // process.exit(1);
//   }
// });

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


export {toArray, findUnusedPort};
