import Promise from 'bluebird';
import { Router } from 'express';
import config from '../../config';
import { app } from '../../app';
import usersRouter from './users';

const router = Router(config.get('router') || {});

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

router.get('/async', function (req, res, next) {
  (async function () {
    let asyncAwait = await Promise.delay(0).then(() => 'asyncAwait alive!!!');
    res.set('X-ENV', app.get('env'));
    res.render('index', { title: 'Express', asyncAwait });
  })().catch(next);
});

router.use('/users', usersRouter);

export default router;
