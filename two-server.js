// *//using the previous example as a guide, create an app that has two web servers.
// * One that listens on port 7000 and one that listens on port 7500.
// * The one listening on port 7000 will always tell the user something good about themselves.
// * The one listening on 7500 will always tell the user something bad about themselves.
var http = require("http");

var port1 = 7000;

var port2 = 7500;

//==========================================================================
function handleRequest1(request, response) {

   
    response.end("Tell the user something good about yourself." + request.url);
   
  }
  function handleRequest2(request, response) {

   
    response.end("Tell the user something about about yourself. " + request.url);
   
  }

//===============================================================================


  
  //=================================================================
  var server1 = http.createServer(handleRequest1);
  var server2 = http.createServer(handleRequest2);
  

  //======================================================================
  
  
  //=======================================================================
  server1.listen(port1, function() {
  
    
    console.log("Server listening on: http://localhost:" + port1);
  });

    server2.listen(port2, function() {
  
    
        console.log("Server listening on: http://localhost:" + port2);
      });
  //====================================================================