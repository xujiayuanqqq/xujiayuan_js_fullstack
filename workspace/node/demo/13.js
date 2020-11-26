const { request } = require("http");

var http = require('http');
var req = http.get({host: 'WWW.byvoid.com'});
req.on('response', function(res) {
  res.setEncoding('utf8');
  res.on('data', function(data) {
    console.log(data);
  });
});