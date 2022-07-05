const router = require('express').Router();
const { indexRoute, helloRoute } = require('../controllers/index.controller');

router.get('/', indexRoute);

router.get('/:id', helloRoute);
module.exports = router;
