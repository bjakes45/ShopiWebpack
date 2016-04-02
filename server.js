var express = require('express');
var app     = express(); 
var webpack = require('webpack');
var MongoClient = require('mongodb').MongoClient,
	assert = require('assert');

app.use(express.static(__dirname + '/public'));

app.use(require('cookie-parser')());
app.use(require('body-parser').urlencoded({ extended: true }));
app.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));

// Connection URL
var url = 'mongodb://localhost:27017/test';
// Use connect method to connect to the Server
MongoClient.connect(url, function(err, db) {
  	assert.equal(null, err);
  	console.log("Connected correctly to server");

   	var col = db.collection('plucodes');

	col.find().limit(1).toArray(function(err, docs) {
    	assert.equal(null, err);
    	assert.equal(1, docs.length);
    	docs.map(function(doc){
    		console.log(doc);
    	})
	});
});

app.listen(8080);
console.log("App listening on port 8080");