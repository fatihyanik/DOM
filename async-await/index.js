/*
function loadJson(url) {
  return fetch(url)
    .then(response => {
      if (response.status == 200) {
        return response.json();
      } else {
        throw new Error(response.status);
      }
    });
}

loadJson('no-such-user.json')
  .catch(alert); // Error: 404
  */ 
 
  // change the async-await

  async function loadJson(url) {
    let response = await fetch(url)
       try{
           if (response.status == 200) {
             return response.json();
           } else {
             throw new Error(response.status);
           }
       } catch(e){
           alert(e.message)
       }
  }
  
  loadJson('no-such-user.json') // Error: 404