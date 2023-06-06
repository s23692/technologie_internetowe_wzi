let http = require('http');
const {test1func,test2func,testfunc} = require('./module');
let url = require('url');

let server = http.createServer(function(req, res) {
    let url_parts = url.parse(req.url);
    console.log(url_parts.pathname);

    res.writeHead(200,{"Content-Type":"text/plain"});

    if(url_parts.pathname==='/test1') {
        res.end(test1func());
    } else if(url_parts.pathname==='/test2') {
        res.end(test2func());
    } else {
        res.end(testfunc());
    }

});

server.listen(8000,"127.0.0.1");

module.exports = {
    test1func() {
        return "Testowy 1";
    },
    test2func() {
        return "Testowy 2";
    },
    testfunc() {
        return "Testowe pozostale";
    }
};