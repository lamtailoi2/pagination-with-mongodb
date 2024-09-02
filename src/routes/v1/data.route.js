const {Router} = require('express');
const asyncHandler = require('../../utils/asyncHandler.js')
const DataController = require('../../controllers/data.controller.js');
const router = Router();

router.get('/data', asyncHandler(DataController.getData));

module.exports = router; 