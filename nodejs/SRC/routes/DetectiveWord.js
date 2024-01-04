var express = require('express');
const router = express.Router();
const DetectiveWordController = require('../app/controllers/DetectiveWordController');
router.get('/', DetectiveWordController.show);

module.exports = router;
