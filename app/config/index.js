const cookieSecret = (process.env.NODE_ENV == 'production')
        ? 'production very strong cookies secret string blablabla 123qwe$%^RTY'
        : 'development very strong cookies secret string blablabla 123qwe$%^RTY'
;

const redirects = {
  // external 301 redirects for `express-redirect`
};
const rewrites  = {
  // internal redirects for `express-urlrewrite`
};

export {cookieSecret, redirects, rewrites};
