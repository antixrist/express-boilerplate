// const Promise = require('bluebird');
import express from 'express';
import usersRouter from './users';

const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/async', async function (req, res, next) {
  let asyncAwait = await Promise.delay(5).then(() => 'asyncAwait alive!!!');
  res.render('index', { title: 'Express', asyncAwait });
});

export {router as app, usersRouter as users};
