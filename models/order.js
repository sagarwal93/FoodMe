var siteModel = require('../models/site.js');

exports.Order=function(){
	this._id= null;
	this.MenuItems= null;
	this.distance =null;
	this.site= new siteModel.Site();
	};