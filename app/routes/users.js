import express from 'express';

const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/qwe', function(req, res, next) {
  res.send('its users qwe');
});

export default router;
