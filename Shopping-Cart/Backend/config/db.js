const mongoose = require("mongoose");

const connectDB = async () => {
  const url =
    "mongodb://localhost:27017/shoppingCart?retryWrites=true&w=majority";
  const connection = await mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  console.log("Mongo is connected ...");
};

module.exports = connectDB;
