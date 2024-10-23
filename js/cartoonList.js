//import jsonData from "./cartoons" with { type: "json" };
import myCartoons from "./cartoons.js";

var doc2 = document.getElementsByClassName("cartoonlist");

var repeatCards = `
<div class="row pt-5">
  <div class="py-4">
    <!-- Single item -->
    <div class="container">
      <div class="row">
        <div class="col-lg-4 d-md-block col-md-4">
          <div class="empty"></div>
        </div>

        <div class="col-lg-4 d-md-block col-md-4">
          <div class="empty"></div>
        </div>

        <div class="col-lg-4 d-md-block col-md-4">
          <div class="empty"></div>
        </div>
      </div>
    </div>
  </div>
</div>
  `;

for (let i = 0; i < myCartoons.cartoons.length / 3; i++) {
  var z = document.createElement("div");
  z.innerHTML = repeatCards;
  doc2.item(0).appendChild(z);
}
