const cookieSecret = `${process.env.NODE_ENV} very strong cookies secret string blablabla 123qwe$%^RTY`;

const redirects = {
  // external 301 redirects for `express-redirect`
};
const rewrites  = {
  // internal redirects for `express-urlrewrite`
};

const express = {
  static: {
    redirect: false
  },
  router: {
    strict: true
  },
  basicAuth: (process.env.NODE_ENV == 'production') ? [{
    name: 'admin',
    pass: 'pass'
  }, {
    name: 'admin2',
    pass: 'pass2'
  }] : false
};

export {cookieSecret, redirects, rewrites, express};
