
module.exports = getDogData = () => {
   require('dotenv').config() 

   let key = process.env.API_KEY;
   let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
   let xhr = new XMLHttpRequest();
   let url = "https://api.thedogapi.com/v1/images/search?breed_id=31";

   return new Promise((resolve, reject) => {
 
     xhr.onreadystatechange = (e) => {
       if (xhr.readyState !== 4) {
         return;
       }
 
       if (xhr.status === 200) {
         console.log('SUCCESS');
         resolve(JSON.parse(xhr.responseText));
       } else {
         console.warn('request_error');
       }
     };
 

     xhr.open('GET', url);
     xhr.setRequestHeader("Accept", "*/*");
     xhr.setRequestHeader("x-api-key", key )
     xhr.send();
   });


}

