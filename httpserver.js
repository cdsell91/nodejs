const http = require("http");

http.createServer(function(request, response) {
    response.writeHead(200, {'Content-type': 'text/html'});
    response.write("<h1>Hello!</h1>");
    response.end();
}).listen(3000, function() {
    console.log("Server on port 3000");
});