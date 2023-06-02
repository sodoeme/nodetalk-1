const getTodos = () => {

    // create new Xmlhttprequest object
    const request = new XMLHttpRequest();
   
   //add statechange listener
   request.addEventListener('readystatechange', ()=>{
   
   //if request completed and status code is ok log response
    if(request.readyState === 4 && request.status ===200){
      console.log(request.responseText)
       }
       //else if only request completed
      else if (request.readyState === 4){
        console.log('could not fetch the data');
      }
   });
   
   //setup request details
   request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
   //send request
   request.send();
   }
   
   
   
   //function called twice
   getTodos();
   getTodos();