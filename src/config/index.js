/** todo: внедрить настройки в код и вытащить оттуда сюда всякие параметры */

import path from 'path';
import nconf from 'nconf';
import {parse, stringify} from 'json5';

const format = {parse, stringify};
const env = process.env.NODE_ENV || 'development';

/** настройки из этой переменной перезапишут одноимённые из любых других источников */
const overrides = {};

/** настройки из этой переменной будут перезаписаны одноимёнными из любых других источников */
const defaults = { env };

nconf
  .overrides(overrides)
  .env()
  .file('environment config', {file: path.join(__dirname, `${env}.json`), format})
  .file('default config', {file: path.join(__dirname, `defaults.json`), format})
  .defaults(defaults)
;

export default nconf;
