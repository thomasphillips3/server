var http = require('http');
var fs = require('fs');
const PORT = 7077;

var server = http.createServer(function(request, response) {
  if (request.url === '/bars') {
    fs.readFile('./views/bars.html', 'utf8', function(errors, contents){
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.write(contents);
      response.end();
    });
  }
  else if (request.url === '/cars') {
    fs.readFile('./views/cars.html', 'utf8', function(errors, contents){
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.write(contents);
      response.end();
    });
  }
  else {
    response.writeHead(404);
    response.end('File nto found, dog');
  }
});
server.listen(PORT);
console.log('Server running on port ' + PORT);
