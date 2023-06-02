//import libraries
const { check } = require("express-validator");
//export the signupValidation
exports.signupValidation = [
  //assure name is not empty
  check("name", "Name is requied").not().isEmpty(),
  //assures email is of email format and also removes periods from local part of gmail address (john.doe@gmail.com -> johndoe@gmail.com)
  check("email", "Please include a valid email").isEmail().normalizeEmail({ gmail_remove_dots: true }),
  //assures password has atleat 6 chars
  check("password", "Password must be 6 or more characters").isLength({
    min: 6,
  }),
];
//export the loginValidation
exports.loginValidation = [
//assures email is of email format and also removes periods from local part of gmail address (john.doe@gmail.com -> johndoe@gmail.com)
  check("email", "Please include a valid email").isEmail().normalizeEmail({ gmail_remove_dots: true }),
  //assures password has atleast 6 chars
  check("password", "Password must be 6 or more characters").isLength({
    min: 6,
  }),
];
