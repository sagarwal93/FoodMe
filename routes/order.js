var express = require('express');
var orderservice = require('../Services/orderservice.js')
var router = express.Router();

/* GET Orders listing. */
router.get(':coordinates?', function(req, res, next) {
  var coordinates=req.param('coordinates').split(',');
  var lat=coordinates[0];
  var long=coordinates[1];
  res.json(orderservice.get(lat,long));
});

module.exports = router;
