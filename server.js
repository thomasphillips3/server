var express = require('express');
var path = require('path');

var app = express();

app.use(express.static(path.join(__dirname + './static')));
app.set('views', path.join(__dirname + '/views'));
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('index');
});

var server = app.listen(9999, function() {
  console.log('listening on 9999');
});

var io = require('socket.io').listen(server);
io.sockets.on('connection', function(socket){
  console.log('socket connected');
  console.log(socket.id);
})
