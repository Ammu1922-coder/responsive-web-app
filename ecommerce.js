const products = [
  { id: 1, name: "Laptop", price: 55000, category: "electronics" },
  { id: 2, name: "Phone", price: 30000, category: "electronics" },
  { id: 3, name: "Headphones", price: 2000, category: "accessories" },
  { id: 4, name: "Keyboard", price: 1500, category: "accessories" }
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];

const productBox = document.getElementById("products");
const cartBox = document.getElementById("cart");
const cartItems = document.getElementById("cart-items");
const cartCount = document.getElementById("cart-count");
const totalText = document.getElementById("total");

function displayProducts(list) {
  productBox.innerHTML = "";
  list.forEach(p => {
    productBox.innerHTML += `
      <div class="product">
        <h3>${p.name}</h3>
        <p>₹${p.price}</p>
        <button onclick="addToCart(${p.id})">Add to Cart</button>
      </div>
    `;
  });
}

function addToCart(id) {
  const item = cart.find(p => p.id === id);
  if (item) {
    item.qty++;
  } else {
    const product = products.find(p => p.id === id);
    cart.push({ ...product, qty: 1 });
  }
  saveCart();
}

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCart();
}

function updateCart() {
  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach(item => {
    total += item.price * item.qty;
    cartItems.innerHTML += `
      <li>
        ${item.name} (x${item.qty})
        <button onclick="remove(${item.id})">❌</button>
      </li>
    `;
  });

  cartCount.textContent = cart.length;
  totalText.textContent = `Total: ₹${total}`;
}

function remove(id) {
  cart = cart.filter(p => p.id !== id);
  saveCart();
}

document.getElementById("cart-btn").onclick = () => cartBox.classList.add("active");
function closeCart() { cartBox.classList.remove("active"); }

document.getElementById("search").oninput = e => {
  const val = e.target.value.toLowerCase();
  displayProducts(products.filter(p => p.name.toLowerCase().includes(val)));
};

document.getElementById("category").onchange = e => {
  const val = e.target.value;
  displayProducts(val === "all" ? products : products.filter(p => p.category === val));
};

document.getElementById("theme").onclick = () => {
  document.body.classList.toggle("dark");
};

displayProducts(products);
updateCart();
