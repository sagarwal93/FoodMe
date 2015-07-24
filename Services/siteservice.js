var dbContext = require('../data/DBContext.js');
var SiteModel = require('../models/site.js');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/FoodMe');

exports.get = function(request, response) {
	response.writeHead(200, {'Content-Type': 'text/html'});
	response.end();
};

exports.search = function(name) {
	var site1=new SiteModel.Site();
	site1.Name=name;
	site1.SiteId="1";
	site1.Address.Address1='363 Bridgestone Ln';
	site1.Address.City='Atlanta';
	site1.Address.State='GA';
	site1.Address.Zip='30134';
	
	var site2=new SiteModel.Site();
	site2.Name=name;
	site2.SiteId="2";
	site2.Address.Address1='363 Bridgestone Ln';
	site2.Address.City='Atlanta';
	site2.Address.State='GA';
	site2.Address.Zip='30134';
	
	return [site1,site2];
	//return dbContex.Select('site',{query: query});
};

exports.getSites = function(callback) {
	return dbContext.loadAll(dbContext.ObjectType.SITES, function(err, data) {
		if (!err) {
			return callback(data)
		} else {
			return console.log("There was an error retrieving the data.");
		}		
	});	
}