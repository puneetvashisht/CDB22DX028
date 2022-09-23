const express = require("express");
const app = express();
const User = require("./models/user");
const connectDB = require("./config/db");
const cors = require("cors");
const Product = require("./models/product");
const protect = require("./middlewares/protect");

app.use(express.json());
app.use(cors());

connectDB();
// GET API
app.get("/test", (req, res) => {
  console.log("test API invoked..");
  res.json({ success: true });
});

// Now, Creating Register Route...
app.post("/register", async (req, res) => {
  const user = await User.create(req.body);
  const token = await user.getSignedJwtToken();

  res.json({ returnedToken: token });
});

// Login..
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const enteredMail = email;
  const enteredPassword = password;

  const user = await User.findOne({ email: enteredMail });
  if (user) {
    const isMatch = await user.matchPassword(enteredPassword);
    if (isMatch) {
      // return token
      const token = await user.getSignedJwtToken();
      res.json({ returnedToken: token });
    } else {
      res.send("Invalid Password");
    }
  } else {
    res.send("Invalid Email ID");
  }
});

// Creating a product..
// We need to protect this route. For that, we will authenticate the incoming token, only then it can create a product..
app.post("/product", protect, async (req, res) => {
  console.log("headers --- ", req.headers.authorization);
  const product = await Product.create(req.body);
  res.json({ product, created: true });
});

// Getting all the products..
app.get("/product", async (req, res) => {
  const products = await Product.find();
  res.json({ products });
});

// Fetch a product by id..
app.get("/product/:productId", async (req, res) => {
  const product = await Product.findById(req.params.productId);
  res.json({ product });
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
