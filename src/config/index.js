import nconf from 'nconf';

const env = process.env.NODE_ENV || 'development';
/** настройки из этой переменной перезапишут одноимённые из любых других источников */
const overrides = { env };
/** настройки из этой переменной будут перезаписаны одноимёнными из любых других источников */
const defaults = {};

nconf
  .overrides(overrides)
  .env()
;

[ env, 'defaults' ].forEach(type => {
  let store = {};
  try {
    store = require(`./${type}.json`);
  } catch (err) {}
  
  nconf.add(`${type} config`, {
    type: 'literal',
    store: store
  });
});

nconf.defaults(defaults);

export default nconf;
