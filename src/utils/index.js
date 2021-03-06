import _ from 'lodash';
import tracer from 'tracer';
import portastic from 'portastic';

/**
 * @param {function} cb
 */
export function onShutdown (cb) {
  onShutdown.handlers.push(cb);
}
onShutdown.handlers = [];

/**
 * @param {*} something
 * @returns {Array}
 */
export function toArray (something = []) {
  let retVal = something;
  
  retVal = (!!retVal) ? retVal : [];
  retVal = (_.isArray(retVal)) ? retVal : [retVal];
  
  return retVal;
}

/**
 * @param min
 * @param max
 * @param step
 * @returns {Number|null}
 */
export async function findUnusedPort (min = 3000, max = 65535, step = 1000) {
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
}


// var colors = require('colors/safe');
// const logger = tracer.console({
//   format: "{{timestamp}} <{{title}}> {{file}}:{{line}} ({{method}}) {{message}}",
//   dateformat: "isoDateTime",
//   preprocess: function(data) {
//   },
//   transport: function(data) {
//     console.log(data.output);
//   },
//   filters: [{
//     //log: do nothing
//     trace: colors.magenta,
//     debug: colors.cyan,
//     info: colors.green,
//     warn: colors.yellow,
//     error: colors.red.bold
//   }],
//   level: 'log',
//   methods: ['log', 'trace', 'debug', 'info', 'warn', 'error'],
//   stackIndex: 0,
//   inspectOpt: {
//     depth: null
//     // showHidden: true,
//   }
// });
//
// let err = new Error('Something wrong!');
// let obj = {
//   Request: [
//     {
//       IsValid:           [true],
//       ItemSearchRequest: [
//         {
//           ResponseGroup: ['Small', 'OfferSummary'],
//           Sort:          ['salesrank'],
//           SearchIndex:   ['DVD']
//         }
//       ]
//     }
//   ]
// };
// obj.recurse = obj;


export const logger = {};

logger.log = console.log.bind(console);
logger.trace = console.trace.bind(console);
logger.info = console.info.bind(console);
logger.warn = console.warn.bind(console);
logger.error = console.error.bind(console);

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
