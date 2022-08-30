const express = require("express");

const app = express();

// REST Architecture -- REST is a standard used by companies and developers worldwide to create API's
// Reading..
// Request Parameters.
app.get("/testpath/:id", (req, res) => {
  // Request Parameters.
  console.log("request-parameters -- ", req.params);

  console.log(req.params.id);
  console.log("API Invoked ....");
  res.json({ success: true });
});

// Query Parameters.
app.get("/testing", (req, res) => {
  console.log("request-query-parameters -- ", req.query);
  console.log("request-query-parameters --> title -- ", req.query.title);
  console.log("request-query-parameters --> id -- ", req.query.id);

  //   console.log(req.params.id);
  console.log("API Invoked ....");
  res.json({ success: true });
});
const port = 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

// const req = {
//   params: {
//     id: 34,
//   },
// };
