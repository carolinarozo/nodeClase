const http = require("http");

http.createServer(function (req, res) {
    console.log(res);
    res.write("hola Mundo!!!!!!");
    res.end();
}).listen(8080);