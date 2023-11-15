const express = require("express");
const app = express();
const path = require("path");

// Reading the environment variables
const dotenv = require("dotenv");
const envPath = path.join(__dirname, "config", "config.env");
dotenv.config({ path: envPath });

// Eanbling the server to serve static content
app.use(express.static(path.join(__dirname, "public")));
// call the express.static() middleware multiple times if you want to load your static assets from multiple  locations

// Connecting the mysql database
require("./db/mysql");

// Connecting the mongodb database
require("./db/mongo.js");

app.use(express.json());
// Specifying the router
const router = require("./router/route");

// Managing cors
const cors = require("cors");

app.use(
  cors({
    origin:
      "*" /*wild card indicating that the server allows requests from any origin*/,
    // origin: "http://localhost:5173",
    // methods: ["GET", "POST", "PUT"], //by default all the request methods are allowed by the server while ussing the  cors library
    credentials: true, // indicates that the server allows cookies/credentials to come within the requests
  })
);

// Starting the socket server (socket.io)
// http
// require("./sockets/socket_using_http_server.js");
// express
require("./sockets/socket_using_express_server.js");

// setting up the templating engine (ejs)
app.set("view engine", "ejs");

app.use(router);

const PORT = process.env.PORT || 7000;

app.get("/heartbeat", (_, response) => {
  response.json({ message: "I am alive!!" });
});

app.get("/ejs/cs", (request, response) => {
  const context = {
    names: ["Dave", "Sara", "Eddie"],
  };
  response.render("checkStatus", context);
});
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

// Resource for ejs template engine: https://www.digitalocean.com/community/tutorials/how-to-use-ejs-to-template-your-node-application
