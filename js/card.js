//import * as DotenvModule from "../node_modules/dotenv/lib/main.js"

import myCartoons from "./cartoons.js";
//import apiKey from "../index.js";

//var divs_len = document.getElementsByClassName("empty").length;
var divsCard = document.querySelectorAll(".empty");
const apiKey = "82b6f576";
for (let i = 0; i < myCartoons.cartoons.length; i++) {
  let apiUrl = `https://www.omdbapi.com/?i=${myCartoons.cartoons[i].id}&apikey=${apiKey}`;
  const response = await fetch(apiUrl);
  const myJson = await response.json(); //extract JSON from the http response

  // console.log(myJson);

  var card = `
  <div class="card">
    <img
      src=${myJson.Poster}
      class="card-img-top"
      height="400px"
      alt="Sunset Over the Sea"
    />
    <div class="card-body text-center">
      <h5 class="card-title">${myJson.Title}</h5>
      <a
        href=https://www.imdb.com/title/${myCartoons.cartoons[i].id}
        target="_blank"
        class="btn btn-primary"
      >
        Learn More
      </a>
      </div>
  </div>
`;

  var doc = document.createElement("div");
  doc.id = "id_" + i;
  doc.innerHTML = card;
  //console.log(divsCard[i]);
  divsCard[i].appendChild(doc);
}
