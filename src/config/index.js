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

// export default nconf;

/** todo: переписав настройки, удалить всё, что ниже */
const isProduction = (process.env.NODE_ENV == 'production');
const cookies      = {
  secret: `${process.env.NODE_ENV} very strong cookies secret string blablabla 123qwe$%^RTY`,
  sessionName: 'PHPSESSID'
};
const cookieSecret = `${process.env.NODE_ENV} very strong cookies secret string blablabla 123qwe$%^RTY`;
// const redirects    = {
//   // external 301 redirects for `express-redirect`
// };
// const rewrites     = {
//   // internal redirects for `express-urlrewrite`
// };

const express = {
  set: {
    // port: process.env.PORT || isProduction ? 3001 : 4000,
    port: 4000,
    views: './views',
    'view engine': 'jade',
    'view cache': false,
    'x-powered-by': false,
    'strict routing': true,
    'case sensitive routing': true,
    /** todo: настройки для реверс-прокси, если перед нодой стоит nginx */
    // 'trust proxy': ''
  },
  locals: {
    env: process.env.NODE_ENV || 'development'
  },
  static: {
    dotfiles: 'ignore',
    etag: true,
    extensions: false,
    fallthrough: true,
    index: 'index.html',
    lastModified: true,
    maxAge: 0,
    redirect: false,
  },
  router: {
    strict: true,
    mergeParams: false,
    caseSensitive: true
  },
  basicAuth: isProduction ? [{
    name: 'admin',
    pass: 'pass'
  }, {
    name: 'admin2',
    pass: 'pass2'
  }] : false
};

export {
  cookies,
  cookieSecret,
  // redirects,
  // rewrites,
  express
};
