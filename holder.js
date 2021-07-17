
// https://pokeapi.co/api/v2/pokemon/1

module.exports = data = () => {
   require('dotenv').config() 

   let key = process.env.API_KEY;

   let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
   let xhr = new XMLHttpRequest();

   let url = "https://api.thedogapi.com/v1/images/search?breed_id=31";

   xhr.open("GET", url);

   //setRequestHeader adds a label/value pair to the header to be sent
   xhr.setRequestHeader("Accept", "*/*");
   xhr.setRequestHeader("x-api-key", key )
   xhr.send();

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
         console.log(xhr.status); //prints status to console
        // console.log(xhr.responseText); //prints response data to console
         let dogData = xhr.responseText;
         dogData;
      }};
}

