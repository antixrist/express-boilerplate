import _ from 'lodash';
import mysql from 'mysql2';
import Promise from 'bluebird';
import nconf from '../config';
import Knex from 'knex';

const config = _.merge(nconf.get('db'), {Promise});
const pool   = mysql.createPoolPromise(config);
// const knex   = Knex({
//   client:     'mysql2',
//   connection: config
// });

export {
  mysql,
  pool,
  config,
  // knex
};
