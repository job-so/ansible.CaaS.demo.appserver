var MongoClient = require('mongodb').MongoClient;

var myCollection;
var db = MongoClient.connect('mongodb://192.168.50.11:27017/test', function(err,db) {
    if(err)
        throw err;
    console.log("connected to the mongoDB !");
    myCollection = db.collection('test_collection');
});

var express = require('express');
var app = express();

app.get('/msg', function (req,res) {
	var date = new Date();
	myCollection.insert({datetimestamp: date.toString(), message: req.query.msg}, function(err, result) {
		if(err) throw err;
		console.log("entry saved");
		res.send("entry saved");
	});
});

app.get('/', function (req, res) {
	var cursor = myCollection.find( );
	var allArray = cursor.toArray(function(err,items){
        res.send(items);
    });
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('app listening at http://%s:%s', host, port);
});
