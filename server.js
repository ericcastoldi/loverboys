var path = require('path');
var express = require('express');

var app = express();
app.use(express.static(path.join(__dirname, '/')));
app.use(express.static(path.join(__dirname, '/img')));

app.listen(80, function() {
  console.log('Server up and running! http://localhost:80/');
});
