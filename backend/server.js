const express = require("express");
// express is used to create web-applications.

const app = express(); // 'app' is our application object representing our application.

// Starting the server and making it listen on a certain port..
const port = 3000;

// creating our 1st API.
// Creating CRUD functionallity using the methods GET, PUT, POST, DELETE.
// And these methods are available on 'app' instance.

// This get method will take two arguments.. 1st is 'path' and 2nd is 'callback' function. Also known as middleware in Express.js

// The path is used by client to find this API to be invoked. // This path '/test' will be the part of the URL which client need to access this API.
// API is nothing but a lines of code wrapped in a function which can be consumed by anyone.
app.get("/test", (req, res) => {
  // So, By default this callback function takes 'req' and 'res' as arguments.
  // We can use this 'res' object to return the response back to the client.
  res.json({ success: true });
});

// Starting the server and making it listen on a certain port..
app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
