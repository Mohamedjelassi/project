const user = require("../Model/User");

const authAdmin = async (req, res, next) => {
  try {
    // Get user information by id
    const user = await users.findOne({
      _id: req.user.id, 
    });
    if (user.role === 1)
      return res.status(400).json({ msg: "accés refusé" });
    next();
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

module.exports = authAdmin;