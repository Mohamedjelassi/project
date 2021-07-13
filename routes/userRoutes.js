const express = require("express");

// Router From express
const router = express.Router();

// UserAdmin Schema
const User = require("../Model/User");

//Bcrypt
const bcrypt = require("bcrypt");

// json web token
const jwt = require("jsonwebtoken");

// validator
const {
  registerRules,
  loginRules,
  validator,
} = require("../Midlewares/validator");

const auth = require("../Midlewares/isAuth");

//http://localhost:5000/api/users/

router.post("/register", registerRules(), validator, async (req, res) => {
  const { nameAgence, email, password, role } = req.body;
  try {
    // if (!nameAgence || !email || !password) {
    //   return res.status(400).json({ msg: "Please entre all fileds" });
    // }
    // check for existing user
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: "User already exists" });
    }
    // Create UserAdmin
    user = new User({ nameAgence, email, password, role });

    //Create Salt
    const salt = 10;
    const hashpassword = await bcrypt.hash(password, salt);

    //Replace user's password
    user.password = hashpassword;

    //save UserAdmin
    await user.save();

    //Sign user
    const payload = {
      id: user._id,
      name: user.nameAgence,
    };

    // Generate Token
    const token = await jwt.sign(payload, process.env.secretkey, {
      expiresIn: "3 days",
    });

    res
      .status(200)
      .send({ msg: "New User register with success", user, token });
  } catch (error) {
    res.status(500).send({ msg: "Server error" });
  }
});

//Login

router.post("/login", loginRules(), validator, async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      return res.status(400).json({ msg: "Please enter all Fields" });
    }

    //check email
    let user = await User.findOne({ email });
    if (!user) {
      res.status(400).json({ msg: "Erorr Login email" });
    }

    //check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: "Erorr Login password" });
    }

    //Sign user
    const payload = {
      id: user._id,
    };

    // Generate Token
    const token = await jwt.sign(payload, process.env.secretkey, {
    });

    res.send({ msg: "user login witg success", user, token });
  } catch (error) {
    res.status(500).json({ msg: "server error" });
  }
});

router.get("/authUser", auth, (req, res) => {
  res.status(200).send({ user: req.user });
});

module.exports = router;
