//import librairies
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
//import validation functions from validation.js file
const { signupValidation, loginValidation } = require('./validation.js');

//intialize express app
const app = express();

//mount middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
   extended: true
}));
app.use(cors());

//setup routes
app.get('/', (req, res) => {
   res.send('Node js file upload rest apis');
});

// for register route, signUpvalidation middleware is used
// if any part of validation fails next() will be executed and go down to error handler
app.post('/register', signupValidation, (req, res, next) => {
  // your registration code
});
// for login route, loginValidation middleware is used
// if any part of validation fails next() will be executed and go down to error handler
app.post('/login', loginValidation, (req, res, next) => {
  // your login code
});
// Handling Errors
//last function, by default will handles anything not handled by prev routes
app.use((err, req, res, next) => {
   // console.log(err);
   err.statusCode = err.statusCode || 500;
   err.message = err.message || "Internal Server Error";
   res.status(err.statusCode).json({
     message: err.message,
   });
});
app.listen(3000,() => console.log('Server is running on port 3000'));