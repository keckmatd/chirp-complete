//import the http module
var http = require('http');

// create the web server
http.createServer(function(req, res){
    //callback executed when request is received
    res.writeHead(200, {'Content-type': 'text/plain'});
    res.end('Hello World\n');
}).listen(1337, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1337/');