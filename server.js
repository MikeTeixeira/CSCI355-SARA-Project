// This file setups up all connections/middlewares/security protocols for
//the back end
const app = require("./server/app");
const debug = require("debug")("node-angular");
const http = require("http");
const bodyParser = require('body-parser')
var multer = require('multer');


//Makes sure the port number is a valid number
const normalizePort = val => {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
};


//Checks which error occured from the port and log it
const onError = error => {
  if (error.syscall !== "listen") {
    throw error;
  }
  const bind = typeof port === "string" ? "pipe " + port : "port " + port;
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
};

//Logs that we are listening to incoming requests
const onListening = () => {
  const addr = server.address();
  const bind = typeof port === "string" ? "pipe " + port : "port " + port;
  debug("Listening on " + bind);
};


//Sets up the port
const port = normalizePort(process.env.PORT || "3000");
app.set("port", port);


//Sets up the server and listens to errors and listening
const server = http.createServer(app);
server.on("error", onError);
server.on("listening", onListening);
server.listen(port);