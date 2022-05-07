var express = require('express');
var router = express.Router();

/* GET porduct listing. */
router.get('/', function(req, res, next) {
    res.send('all products');
});
  
module.exports = router;