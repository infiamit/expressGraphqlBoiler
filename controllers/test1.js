const express = require('express');

const router = express.Router();

/* GET users listing. */
router.get('/test', (req, res) => {
    res.send('this is test route and do not require to import in app.js');
});

module.exports = router;
