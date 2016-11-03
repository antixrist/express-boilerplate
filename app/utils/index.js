import _ from 'lodash';

/**
 * @param {*} something
 * @returns {Array}
 */
const toArray = function (something = []) {
  let retVal = something;

  retVal = (!!retVal) ? retVal : [];
  retVal = (_.isArray(retVal)) ? retVal : [retVal];

  return retVal;
};

export {toArray};
