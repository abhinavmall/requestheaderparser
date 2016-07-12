var express = require('express');
var app = express();
var port = process.env.PORT || 8080;

app.get('/', function(req,res){
  var ua = req.headers['user-agent'];    
  var lang = req.headers['accept-language'];
  var ip = req.headers['x-forwarded-for'] || 
     req.connection.remoteAddress || 
     req.socket.remoteAddress ||
     req.connection.socket.remoteAddress;
  var resObj = {
      software: ua,
      language: lang,
      ipaddress: ip
  };
  console.log(resObj);
  res.end(JSON.stringify(resObj));
});

app.listen(port,  function () {
	console.log('Node.js listening on port ' + port + '...');
});