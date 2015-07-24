var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/FoodMe');

var SiteModel = require('../models/site.js');

function validateObjectType(objectType) {
	if (objectType < 0 || objectType > 3) {
		return false;
	}
	
	return true;
}

exports.ObjectType = {
	SITES: { value: 0, name: "sites" },
	MENUS: { value: 1, name: "menus" },
 	MENUITEMS: { value: 2, name: "menuitems" },
	ORDERS: { value: 3, name: "orders" }
}

exports.insert = function(objectType, model, options) {
	var collection = db.get(objectType);
	collection.insert(model,
		function (err, doc) {
			if (err) {
				return false;
			}
		});
	return true;
}

exports.load = function(objectType,id) {
	var isObjectTypeValid = validateObjectType(objectType);
	if (!isObjectTypeValid) {
		return isObjectTypeValid;
	}
	
	var result = {};
	var collection = db.get(objectType.name);
	collection.find({ _id: id }, {}, function(e, doc) {
		result = doc;
	});
	
	return result;
}

exports.loadAll = function(objectType, callback) {
	var isObjectTypeValid = validateObjectType(objectType);
	if (!isObjectTypeValid) {
		return isObjectTypeValid;
	}
	
	return SiteModel.find({}, {}, function (err, sites) {
		if (!err) {
			return callback(err, sites);
		} else {
			return console.log(err);
		}
	});
}