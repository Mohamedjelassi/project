const jwt = require("jsonwebtoken");
const User = require("../Model/User");

const auth = async (req, res, next) => {
  try {
    const token = req.header("Authorization");
    if (!token) {
      return res
        .status(401)
        .send({ msg: "No Token, authentification invalide" });
    }
    const decoded = await  jwt.verify(token, process.env.secretkey);


    //Add user from payload
    const  user = await  User.findById(decoded.id)


    // Check user if not user 
    if(!user) {
        return res.status(401).send({msg : 'authentification invalide'})
    }
    req.user = user

    next();
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

module.exports = auth;
