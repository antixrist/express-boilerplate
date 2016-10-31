module.exports = function seo ({
  removeTrailingSlash = true,
  removeHtmlSuffix = true,
  toLower = true
} = {}) {
  return function (req, res, next) {
    let url = req.url;
    if (removeTrailingSlash && url !== '/' && /\/$/.test(url)) {
      url = url
        .replace(/^\/+/, '/')
        .replace(/\/+$/, '')
      ;
    }
    if (removeHtmlSuffix && /\.html$/.test(url)) {
      url = url.replace(/\.html$/, '');
    }
    if (toLower && /[A-Z]/.test(url)) {
      url = url.toLowerCase();
    }
  
    if (url != req.url) {
      return res.redirect(301, url);
    }
    return next();
  };
};
