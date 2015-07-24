var express = require('express');
var siteservice = require('../Services/siteservice.js')
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(siteservice.search("chipotle"));
});

module.exports = router;
