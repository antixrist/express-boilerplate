let cookieSecret;
if (process.env.NODE_ENV == 'production') {
  cookieSecret = 'production very strong cookies secret string blablabla 123qwe$%^RTY';
} else  {
  cookieSecret = 'development very strong cookies secret string blablabla 123qwe$%^RTY';
}

export {cookieSecret};
