var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer(function (req, res) {
    
    // res.end(req.url);
    if(req.url == '/home'){
        var fname = "./home.html";
        fs.readFile(fname,function(err,data){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
        });
    }
    else if(req.url == '/product'){
        var fname = "./product.html";
        fs.readFile(fname,function(err,data){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
        });
    }
    else if(req.url == '/about'){
        var fname = "./about.html";
        fs.readFile(fname,function(err,data){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
        });
    }
    else if(req.url == '/service'){
        var fname = "./service.html";
        fs.readFile(fname,function(err,data){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
        });
    }
    else if(req.url == '/contact'){
        var fname = "./contact.html";
        fs.readFile(fname,function(err,data){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
        });
    }
    else{
    var q = url.parse(req.url, true).query; 
    res.write(q.txtName);
    res.write(q.txtMobile);
    return res.end();
}
}).listen(4500);