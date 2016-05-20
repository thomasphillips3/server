var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

var route = require('./routes/index.js')(app);

app.listen(9999, function(){
  console.log('port 9999');
});
