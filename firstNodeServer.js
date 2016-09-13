// require nad import the http module
var http = require('http');

// define the listening port
const PORT=8080;

// make a function that handles requests and sends responses
function handleRequest(request, response) {
  response.end("It works!! Path:" + request.url);
  console.log("somethign");
}

var server = http.createServer(handleRequest);

// start the server
server.listen(PORT, function(){
  // callback triggered when server is listening. hooray!!
  console.log('Server is listening on http://localhost:%s', PORT);
});
console.log(server);
