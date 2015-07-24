var dbContex = require('../data/DBContext.js');
var siteModel = require('../models/site.js');

exports.search = function(name) {
	var site1=new siteModel.Site();
	site1.Name=name;
	site1.SiteId="1";
	site1.Address.Address1='363 Bridgestone Ln';
	site1.Address.City='Atlanta';
	site1.Address.State='GA';
	site1.Address.Zip='30134';
	
	var site2=new siteModel.Site();
	site2.Name=name;
	site2.SiteId="2";
	site2.Address.Address1='363 Bridgestone Ln';
	site2.Address.City='Atlanta';
	site2.Address.State='GA';
	site2.Address.Zip='30134';
	
	return [site1,site2];
	//return dbContex.Select('site',{query: query});
};

exports.getbyid=function(id){
	
	var site1= new siteModel.Site();
	site1.Name="John Name";
	site1.SiteId="1";
	site1.Address.Address1='363 Bridgestone Ln';
	site1.Address.City='Atlanta';
	site1.Address.State='GA';
	site1.Address.Zip='30134';
	
	return site1;
};