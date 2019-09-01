var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/test', function (req, res, next) {
  res.send('this is test route and do not require to import in app.js');
});

module.exports = router;
