// const Promise = require('bluebird');
import {express as expressConfig} from '../config';
import {Router} from 'express';
import usersRouter from './users';

const router = Router(expressConfig.router);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.cookie('asd', 'qwe', {
    path: '/',
    // secure: true,
    httpOnly: true
  });
  res.cookie('asdSigned', 'qwe', {
    signed: true,
    path: '/',
    // secure: true,
    httpOnly: true
  });
  res.render('index', { title: 'Express' });
});

router.get('/async', async function (req, res, next) {
  let asyncAwait = await Promise.delay(5).then(() => 'asyncAwait alive!!!');
  res.render('index', { title: 'Express', asyncAwait });
});

router.use('/users', usersRouter);

export default router;
