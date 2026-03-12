let cart = [];
let total = 0;

document.getElementById("year").innerText = new Date().getFullYear();

function showSection(id) {
  document.querySelectorAll("section").forEach(s => s.classList.remove("show"));
  document.getElementById(id).classList.add("show");
}

function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  if (user && pass) {
    showSection("home");
  } else {
    document.getElementById("loginMsg").innerText = "Please enter credentials";
  }
}

function addToCart(name, price) {
  cart.push({ name, price });
  total += price;
  alert("Added to cart");
}

function showCart() {
  showSection("cart");
}

function updateCart() {
  const list = document.getElementById("cartItems");
  list.innerHTML = "";

  cart.forEach(item => {
    const li = document.createElement("li");
    li.innerText = `${item.name} - ₹${item.price}`;
    list.appendChild(li);
  });

  document.getElementById("totalPrice").innerText = `Total: ₹${total}`;
}

function placeOrder() {
  const finalList = document.getElementById("finalItems");
  finalList.innerHTML = "";

  cart.forEach(item => {
    const li = document.createElement("li");
    li.innerText = `${item.name} - ₹${item.price}`;
    finalList.appendChild(li);
  });

  document.getElementById("finalTotal").innerText =
    `Grand Total: ₹${total}`;

  cart = [];
  total = 0;

  showSection("finalView");
}


document.addEventListener("click", updateCart);
