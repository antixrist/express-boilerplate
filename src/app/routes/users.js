import config from '../../config';
import {Router} from 'express';

const router = Router(config.get('config') || {});

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/qwe', function(req, res, next) {
  res.send('its users qwe');
});

export default router;
