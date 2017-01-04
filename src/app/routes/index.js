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
    try {
      let asyncAwait = await Promise
        .delay(0)
        .then(() => 'asyncAwait alive!!!')
        .then(function () {
          throw new Error('error!!!!!');
          // return Promise.reject('error!!!!!');
          // return Promise.reject(new Error('error!!!!!'));
        })
      ;

      // setTimeout(function () {
      //   throw new Error('error!!!!!');
      // }, 10);

      res.set('X-ENV', app.get('env'));
      res.render('index', { title: 'Express', asyncAwait });

    } catch (err) {
      next(err);
    }
  })()/*.catch(err => next(err))*/;

  // setTimeout(function () {
  //   throw new Error('error!!!!!');
  // }, 10);
});

router.use('/users', usersRouter);

export default router;
