import _ from 'lodash';
import portastic from 'portastic';

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

export {toArray, findUnusedPort};
