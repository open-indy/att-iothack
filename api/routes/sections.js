var express = require( 'express' );
var app = module.exports = express();
var mongoose = require('mongoose');
var config = require('config');
var dbUri = config.dbUri.replace('<user>', config.dbUser).replace('<pw>', config.dbPass);

mongoose.connect(dbUri);

var sectionSchema = require('../schema/section');
var Sections = mongoose.model('Section', sectionSchema, 'sections');

app.get( '/', function( req, res ) {
  Sections.find({}).sort({ id: 'asc' }).exec(function(err, data){
    if(err){ res.status(500).send('Server error.'); }

    res.status(200).send(data);
  });
});

module.exports = app;
