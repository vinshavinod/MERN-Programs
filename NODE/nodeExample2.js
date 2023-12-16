var http = require('http');
var fs = require('fs');
var url = require('url');
http.createServer(function (req, res) {
    if(req.url == '/home' ){
        var fname = "./home.html";
        fs.readFile(fname,function(err,data){
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data)
            res.end();
        });
    }

}).listen(8080);