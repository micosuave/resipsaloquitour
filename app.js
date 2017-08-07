var express = require('express');

var app = express();

app.set('port', process.env.port || 4000);
app.all('/', function(req, res, next){
  console.log(req);
});
app.listen(app.get('port'), function(resp){
  console.log('Express now listening on port' + app.get('port'))
});
