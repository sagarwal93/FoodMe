var addressModel = require('../models/address.js');

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var siteSchema = new Schema({
	menu_id: String,
	name: String
});

module.exports = mongoose.model('sites', siteSchema);