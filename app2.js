//import necesarry librairies
const {readFile, writeFile} = require('fs');
console.log('start');
//read txt file asynchronously
readFile('./content/first.txt','utf8', (err, result)=> {
    //if reading file fails display error
   if (err) {
       console.log(err);
       return 
   }

   const first = result;
   console.log(result);
   //read second txt file asynchronously
   readFile('./content/second.txt','utf8', (err, result)=> {
    //if trading file fails dsiplay error
       if (err) {
           console.log(err);
           return 
       }
       const second = result;
       console.log(result);
       //write the contents of both files that were saved int variables into result txt file
       writeFile('./content/result-async.txt', `Here is the result : ${first}, ${second}`,(err, result) => {
        //if failed to write display err   
        if (err) {
               console.log(err);
               return 
           }
           //else print statement
           console.log('done with the task');
       }
       );
   })
});


console.log('starting next task');
