var express = require('express');
var router = express.Router();

/* GET home page. */
router.use('/', require('./users'));
router.use('/', require('./test1'));
// Import all controllers from this folder and it will automatically get added to app.js file.

module.exports = router;
