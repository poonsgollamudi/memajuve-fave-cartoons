import jsonData from "./data/cartoons.json" with { type: "json" };

var divsCard = document.querySelectorAll(".empty");
//console.log(divsCard);
var divs_len = document.getElementsByClassName("empty").length;



for (let i = 0; i < divs_len; i++) {

        let apiUrl = `https://www.omdbapi.com/?i=${jsonData.cartoons[i].id}&apikey=82b6f576`
        const response = await fetch(apiUrl);
        const myJson = await response.json(); //extract JSON from the http response
        // do something with myJson
        console.log(myJson)
      
  var card = `
  <div class="card">
    <img
      src=${myJson.Poster}
      class="card-img-top"
      height="300px"
      alt="Sunset Over the Sea"
    />
    <div class="card-body text-center">
      <h5 class="card-title">${myJson.Title}</h5>
      <h6>
        ${myJson.Plot}
      </h6>
      <a
        href=${jsonData.cartoons[i].utube_link}
        target="_blank"
        class="btn btn-primary"
      >
        Cartoon Opening
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
