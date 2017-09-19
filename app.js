var express = require('express');
var app = express();

app.get('/', function (req, res) {
        res.send('Hello from the smart and sexy Application ...');
});

var server = app.listen(3000, '0.0.0.0', function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('app listening at http://%s:%s', host, port);
});
