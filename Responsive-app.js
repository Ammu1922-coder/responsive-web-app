// Product data
var products = [
  { name: "Laptop", price: "₹55,000", image: "../images/laptop.jpeg" },
  { name: "Phone", price: "₹30,000", image: "../images/phn.jpeg" },
  { name: "Headphones", price: "₹2,000", image: "../images/headphone.jpeg" }
];


var container = document.getElementById("productContainer");
var nav = document.getElementById("nav");
var menuBtn = document.getElementById("menuBtn");

/* Render products (single DOM update) */
function loadProducts() {
  var html = "";

  for (var i = 0; i < products.length; i++) {
    html +=
      '<div class="card">' +
        '<img src="' + products[i].image + '" loading="lazy" alt="product">' +
        '<h3>' + products[i].name + '</h3>' +
        '<p>' + products[i].price + '</p>' +
      '</div>';
  }

  container.innerHTML = html;
}

/* Mobile menu toggle (Safari-safe) */
menuBtn.addEventListener("click", function () {
  nav.classList.toggle("active");
});

loadProducts();
