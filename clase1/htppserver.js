const http = require("http");

http.createServer(function (req, res) {
    console.log(req);
    res.write("hola Mundo!!!!!!");
    res.end();
}).listen(8080);