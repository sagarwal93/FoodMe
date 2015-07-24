var express = require('express');
var siteservice = require('../Services/siteservice.js')
var router = express.Router();

/* GET users listing. */
router.get('/search:q?', function(req, res, next) {
  var query=req.param('q');
  res.json(siteservice.search(query));
});

router.get('/:id', function(req, res, next) {
  var id=req.params.id;
  res.json(siteservice.getbyid(id));
});

module.exports = router;
