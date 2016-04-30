var http = require('http');
var fs = require('fs');

var server = http.createServer(function(request, response) {
  if (request.url === '/bars') {
    fs.readFile('./views/bars.html', 'utf8', function(errors, contents){
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
server.listen(6789);
console.log('Server running on 6789');
