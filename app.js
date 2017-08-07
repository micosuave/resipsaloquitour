var express = require('express');
var serveStatic = require('serve-static');
var path = require('path');

var app = express();

app.set('port', process.env.port || 4000);
app.use("", serveStatic(path.join(process.cwd())));
app.listen(app.get('port'), function(resp){
  console.log('Express now listening on port' + app.get('port'))
});
