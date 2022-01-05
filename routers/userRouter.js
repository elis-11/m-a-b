const router = require("express").Router();
const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken")

router.post("/", async (req, res) => {
  //   res.send("test");
  // console.log(req.body);
  // res.sendStatus(200);
  try {
    const { email, password, passwordVerify } = req.body;

    //  validation

    if (!email || !password || !passwordVerify)
      return res
        .status(400)
        .json({ errorMessage: "Please enter all required fields." });

    if (password.length < 4)
      return res.status(400).json({
        errorMessage: "Please enter a password of at least 4 characters.",
      });

    if (password !== passwordVerify)
      return res
        .status(400).json({ 
          errorMessage: "Please enter the same password twice.", });

    const existingUser = await User.findOne({ email });
    if (existingUser)
    return res
      .status(400).json({ 
        errorMessage: "An account with this email already exists.", });

    // hash the password
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);
    // console.log(passwordHash);

   // 3:30 save a new user account to the database

        const newUser = new User({
          email, passwordHash
        })
        
        const savedUser = await newUser.save()

        // log the user in

        const token = jwt.sign({
          user: savedUser._id
        }, process.env.JWT_SECRET)

        console.log(token);

  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
});

module.exports = router;
