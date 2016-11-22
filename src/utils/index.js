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



const inspectOpt = {
  depth : null,
  colors: true,
  // showHidden: true,
};

const logger = tracer.console({
  inspectOpt
  // stackIndex : 0 // default 0
});

logger.color = tracer.colorConsole({
  inspectOpt
  // stackIndex : 0 // default 0
});


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

logger.log(obj);
logger.color.log(obj);



export {toArray, findUnusedPort};
