const express = require("express");
const connectDB = require("./config/db");
const Course = require("./models/course");
const app = express();
const cors = require("cors");

connectDB();
app.use(express.json()); // JSON Parser..
// Creating API's for CRUD on courses.

app.use(cors());

// CREATE Operation..
app.post("/course", async (req, res) => {
  console.log(req.body);
  // Create a object in the 'courses' collection in the database.
  const createdCourse = await Course.create(req.body);
  res.json(createdCourse);
});

// READ Operation...
app.get("/course", async (req, res) => {
  // Get all the courses from the database.
  const courses = await Course.find();
  res.json(courses);
});

// UPDATE Operation...
app.put("/course/:courseID", async (req, res) => {
  // Aim - Fetch the course by using a ID and then Updating the description to 'front-end library'
  console.log("request body in 1st API --- ", req.body);
  const updatedCourse = await Course.findByIdAndUpdate(
    req.params.courseID,
    req.body
  );
  res.json({ success: true });
});

// Making the course as shared..
app.put("/sharecourse/:courseId", async (req, res) => {
  // Aim - Fetch the course by using a ID and then Updating the description to 'front-end library'
  console.log("request body in 2nd API--- ", req.body);
  const updatedCourse = await Course.findByIdAndUpdate(
    req.params.courseId,
    req.body
  );
  res.json({ success: true });
});

// DELETE Operation:
app.delete("/delete/:courseId", async (req, res) => {
  const deletedCourse = await Course.findByIdAndDelete(req.params.courseId);
  res.json({ successDeletion: true });
});

// Getting a single course:
app.get("/course/:courseId", async (req, res) => {
  const course = await Course.findById(req.params.courseId);
  res.json(course);
});
// app.use(express.json()); // JSON Parser..

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
