var http = require('http');
http.createServer(function (req,res) {
    res.writeHead(200, {'Content-Type' : 'text/plain'});
    res.end('I am from calicut');
}).listen(8080);