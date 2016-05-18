var express = require('express');
var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response){
  response.redirect('/index');
})

app.get('/index', function(request, response){
  response.render('index');
  console.log('redirected');
})

app.use(express.static(__dirname + '/views'));

app.listen(9999, function(){
  console.log("port 9999");
})
