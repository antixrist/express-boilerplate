const isProduction = (process.env.NODE_ENV == 'production');
const cookieSecret = `${process.env.NODE_ENV} very strong cookies secret string blablabla 123qwe$%^RTY`;
const redirects = {
  // external 301 redirects for `express-redirect`
};
const rewrites = {
  // internal redirects for `express-urlrewrite`
};

const express = {
  set: {
    port: process.env.PORT || isProduction ? 3001 : 4000,
    views: './views',
    'view engine': 'jade',
    'x-powered-by': false,
    'strict routing': true,
    'case sensitive routing': true,
    // 'trust proxy': ''
  },
  locals: {

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

export {cookieSecret, redirects, rewrites, express};
