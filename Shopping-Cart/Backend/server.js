const express = require("express");
const app = express();
const User = require("./models/user");
const connectDB = require("./config/db");

app.use(express.json());
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

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
