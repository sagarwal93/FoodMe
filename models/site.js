var addressModel = require('../models/address.js');

exports.Site =function(){
	this.Name= null;
	this.SiteId= null;
	this.Address= new addressModel.Address();	
};