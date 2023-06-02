//import mysql library
var mysql=require('mysql');
//define user credentials and database
var connection=mysql.createConnection({
  host:'localhost',
  user:'your username',
  password:'your password',
  database:'your database name'
});

//intiate sign in
connection.connect(function(error){
    //if not not error (if error) log error
  if(!!error){
    console.log(error);
  }
  // else log
  else{
    console.log('Connected!:)');
  }
}); 

//export connection to be used in other files
module.exports = connection;
