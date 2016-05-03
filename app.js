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
  else if (request.url === '/stylesheets/styles.css') {
    fs.readFile('./stylesheets/styles.css', 'utf8', function(errors, contents){
      response.writeHead(200, {'Content-Type': 'text/css'});
      response.write(contents);
      response.end();
    });
  }
  else if (request.url === '/images/bars/cheers.jpg') {
    fs.readFile('./images/bars/cheers.jpg', function(errors, contents){
      response.writeHead(200, {'Content-Type': 'image/jpg'});
      response.write(contents);
      response.end();
    });
  }
  else if (request.url === '/images/bars/moes.jpg') {
    fs.readFile('./images/bars/moes.jpg', function(errors, contents){
      response.writeHead(200, {'Content-Type': 'image/jpg'});
      response.write(contents);
      response.end();
    });
  }
  else if (request.url === '/images/bars/gibsons.jpg') {
    fs.readFile('./images/bars/gibsons.jpg', function(errors, contents){
      response.writeHead(200, {'Content-Type': 'image/jpg'});
      response.write(contents);
      response.end();
    });
  }
  else if (request.url === '/images/bars/paddys.jpg') {
    fs.readFile('./images/bars/paddys.jpg', function(errors, contents){
      response.writeHead(200, {'Content-Type': 'image/jpg'});
      response.write(contents);
      response.end();
    });
  }
  else if (request.url === '/images/social/adventure-tomcat.png') {
    fs.readFile('./images/social/adventure-tomcat.png', function(errors, contents){
      response.writeHead(200, {'Content-Type': 'image/png'});
      response.write(contents);
      response.end();
    });
  }
  else if (request.url === '/images/social/facebook.png') {
    fs.readFile('./images/social/facebook.png', function(errors, contents){
      response.writeHead(200, {'Content-Type': 'image/png'});
      response.write(contents);
      response.end();
    });
  }
  else if (request.url === '/images/social/linkedin.png') {
    fs.readFile('./images/social/linkedin.png', function(errors, contents){
      response.writeHead(200, {'Content-Type': 'image/png'});
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
