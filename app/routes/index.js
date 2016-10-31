const Promise = require('bluebird');
const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/async', async function (req, res, next) {
  let asyncAwait = await Promise.delay(300).then(() => 'asyncAwait alive!!!');
  res.render('index', { title: 'Express', asyncAwait });
});

module.exports = router;
