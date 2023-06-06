let http = require('http');
let url = require('url');

let server = http.createServer(function(req, res) {
    let url_parts = url.parse(req.url);
    console.log(url_parts.pathname);

    res.writeHead(200,{"Content-Type":"text/plain"});

    if(url_parts.pathname==='/test1') {
        res.end("Testowy 1");
    } else if(url_parts.pathname==='/test2') {
        res.end("Testowy 2");
    } else {
        res.end("Testowe pozostale");
    }

});

server.listen(8000,"127.0.0.1");

