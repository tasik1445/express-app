var fs = require('fs');
var http = require('http');

var server = http.createServer(function(req, res) {
    if (req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<h1>This is the Home Page</h1>');
        res.end();
    }
    else if (req.url === '/about') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<h1>This is the About Page</h1>');
        res.end();
    }
    else if (req.url === '/contact') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<h1>This is the Contact Page</h1>');
        res.end();
    }
    else if (req.url === '/file-write') {
        fs.writeFile('demo.text', 'hello world', function(error){
            if (error){
             res.writeHead(200, {'Content-Type': 'text/html'});
             res.write('Failed to write File');
             res.end();
            }
            else{
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write('File write Success');
                res.end();
            }
        })
    }
})

server.listen(5500);
console.log("Server started on port 5500");