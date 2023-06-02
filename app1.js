//import necessary libararies
const {readFileSync, writeFileSync} = require('fs');



// intialize variable to hold function
const fs = require('fs');

//first equals content of txt file that was read synchronously
const first = readFileSync('./content/first.txt','utf8')

//second equals content of txt file that was read synchronously
const second = readFileSync('./content/second.txt','utf8')

//print content of variables
console.log(first, second);

//write content to file synchronously
writeFileSync('./content/result-sync.txt', `Here is the result : ${first}, ${second}`);

//write content to file synchronously and instead of over writing, the flag a appends to the existing file
writeFileSync('./content/result-sync.txt', `Here is the result : ${first}, ${second}`,{flag: 'a'});
