const mongoose = require("mongoose");

// const Schema = mongoose.Schema;

const CourseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please give a title"],
  },
  description: {
    type: String,
    required: [true, "Please give a description"],
  },
  shared: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Creating Model..
// Model is a wrapper over schema.

const Course = mongoose.model("Course", CourseSchema);
// const Course = mongoose.model("UserCourse", CourseSchema);

// Exporting the course model..
module.exports = Course;
