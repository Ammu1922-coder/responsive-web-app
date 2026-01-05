// Product data (cached-friendly)
const products = [
  {
    name: "Laptop",
    price: 55000,
    image: "../images/laptop.jpeg"
  },
  {
    name: "Smartphone",
    price: 30000,
    image: "../images/phn.jpeg"
  },
  {
    name: "Headphones",
    price: 2000,
    image: "../images/headphone.jpeg"
  },
  {
    name: "Keyboard",
    price: 1500,
    image: "../images/keyboard.jpeg"
  },
   {
    name: "Ac",
    price: 30000,
    image: "../images/ac.jpeg"
  },
  {
    name: "Smart Tv",
    price: 20000,
    image: "../images/tv.jpeg"
  },
   {
    name: "fan",
    price: 5000,
    image: "../images/fan.png"
  },
     {
    name: "Earbuds",
    price: 2000,
    image: "../images/earbuds.jpeg"
  },
       {
    name: "Bread Roaster",
    price: 1000,
    image: "../images/bread roaster.jpeg"
  },
         {
    name: "Juicer",
    price: 1600,
    image: "../images/juicer.jpeg"
  },
         {
    name: "Micro Oven",
    price: 2500,
    image: "../images/micro oven.jpeg"
  },       {
    name: "Tablet",
    price: 1500,
    image: "../images/tablet.jpeg"
  },
];

const container = document.getElementById("product-container");
const searchInput = document.getElementById("search");

/* Efficient rendering (single DOM update) */
function renderProducts(list) {
  let html = "";

  list.forEach(p => {
    html += `
      <div class="product">
        <img src="${p.image}" loading="lazy" alt="${p.name}">
        <h3>${p.name}</h3>
        <p>₹${p.price}</p>
      </div>
    `;
  });

  container.innerHTML = html;
}

/* Search optimization */
searchInput.addEventListener("input", e => {
  const value = e.target.value.toLowerCase();
  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(value)
  );
  renderProducts(filtered);
});

/* Initial load */
renderProducts(products);
