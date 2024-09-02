const dataRoute = require('./v1/data.route.js');
const {Router} = require('express');

const router = Router();

router.use('/v1', dataRoute);

module.exports = router;