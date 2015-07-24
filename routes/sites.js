var express = require('express');
var router = express.Router();

var SiteService = require('../Services/siteservice.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
	SiteService.getSites(function(data) {
		res.send(data);
	});
});

module.exports = router;