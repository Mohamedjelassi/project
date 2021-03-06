const { body, validationResult } = require('express-validator');

const registerRules = () => [
  body("nameAgence", "Name is required").notEmpty(),
  body("email", "email is required").isEmail(),
  body( 
    "password",
    "password is required and must contain al least 6 characters"
  ).isLength({
    min: 6,
    max: 12,
  }),
];

const loginRules = () => [
  body("email", "email is required").isEmail(),
  body(
    "password",
    "password is required and must contain al least 6 characters"
  ).isLength({
    min: 6,
    max: 12,
  }),
];

const validator = (req, res, next) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).send({
      errors: errors.array().map((el) => ({
        msg: el.msg,
      })),
    });
  }
  next();
};

module.exports = { registerRules, loginRules, validator };
