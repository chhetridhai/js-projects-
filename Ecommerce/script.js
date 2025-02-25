document.addEventListener("DOMContentLoaded", () => {
  // 1️⃣ Define the product list
  const products = [
    { id: 1, name: "Product 1", price: 29.99 },
    { id: 2, name: "Product 2", price: 19.99 },
    { id: 3, name: "Product 3", price: 59.99 },
  ];

  // 2️⃣ Create an empty cart array to store added items
  const cart = [];

  // 3️⃣ Get references to HTML elements
  const productList = document.getElementById("product-list");
  const cartItems = document.getElementById("cart-items");
  const totalPriceDisplay = document.getElementById("total-price");
  const checkOutBtn = document.getElementById("checkout-btn");

  // 4️⃣ Loop through the products and add them to the page
  products.forEach((product) => {
    const productDiv = document.createElement("div"); // Create a div for each product
    productDiv.classList.add("product");

    productDiv.innerHTML = `
      <span>${product.name} - $${product.price.toFixed(2)}</span>
      <button data-id="${product.id}">Add to cart</button>
    `;

    productList.appendChild(productDiv);
  });

  // 5️⃣ Add event listener to detect button clicks and add items to cart
  productList.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      // Check if a button is clicked
      const productId = parseInt(e.target.getAttribute("data-id")); // Get product ID
      const product = products.find((p) => p.id === productId); // Find product from list
      addToCart(product); // Call function to add product to cart
    }
  });

  // 6️⃣ Function to add a product to the cart
  function addToCart(product) {
    cart.push(product); // Add product to cart array
    renderCart(); // Update cart UI
  }

  // 7️⃣ Function to display cart items and calculate total price
  function renderCart() {
    cartItems.innerText = ""; // Clear previous cart items
    let totalPrice = 0; // Initialize total price

    cart.forEach((item) => {
      totalPrice += item.price; // Add each item's price to total

      const cartItem = document.createElement("div"); // Create a div for each cart item
      cartItem.innerHTML = `${item.name} - $${item.price.toFixed(2)}`; // Display item
      cartItems.appendChild(cartItem); // Add to cart display section
    });

    // 8️⃣ Update the total price display
    totalPriceDisplay.textContent = `$${totalPrice.toFixed(2)}`;

    // Show or hide the cart-total div based on whether the cart is empty or not
    if (cart.length > 0) {
      document.getElementById("cart-total").classList.remove("hidden");
    } else {
      document.getElementById("cart-total").classList.add("hidden");
    }
  }
  checkOutBtn.addEventListener("click", () => {
    // Step 1: Clear the cart
    cart.length = 0;

    // Step 2: Show an alert message
    alert("Checkout successfully");

    // Step 3: Update the cart UI
    renderCart();
  });
});

