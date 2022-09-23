const jwt = require("jsonwebtoken");
const User = require("../models/user");

const protect = (req, res, next) => {
  let token = req.headers.authorization;

  token = token.split(" ");

  token = token[1];
  console.log("token ---", token);

  const decodedUser = jwt.verify(
    token,
    "This secret key is used to encrypt the payload and generate the token"
  );

  // Verifying the user if this user exists in data base on not ?
  const userFound = User.findOne({ id: decodedUser.id });
  console.log("userFound ----- ", userFound);
  if (userFound) {
    next(); // "next" method calls up the next middleware function in the series..
  } else {
    res.json({ message: "Invalid user, doesn't have a valid token" });
  }
};

module.exports = protect;
