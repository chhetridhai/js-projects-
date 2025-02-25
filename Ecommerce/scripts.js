document.addEventListener("DOMContentLoaded", () => {
  const products = [
    { id: 1, name: "Product 1", price: 29.99 },
    { id: 2, name: "Product 2", price: 19.99 },
    { id: 3, name: "Product 3", price: 59.999 },
  ];

  const price =[]
  const productList = document.getElementById("product-list");
  //   const button = document.querySelectorAll("button[data-id]")
  const cartItems = document.getElementById("cart-items"); //element goes here after clicking add to cart
  const totalPrice = document.getElementById("total-price");
  const checkoutbtn = document.getElementById("checkout-btn");

  products.forEach((items) => {
    const newElement = document.createElement("div");
    newElement.innerHTML = `<span>${items.name} - $${items.price} </span>
      <button data-id="${items.id}">Add to cart</button>`;
    const id = items.id;
    newElement.setAttribute("id", id);
    newElement.classList.add("product");
    productList.appendChild(newElement);
  });


  const buttons = document.querySelectorAll("button[data-id]");
  //adding event listener to the add to cart button
  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      console.log(e);
      
      const id = e.target.dataset.id;
      const prodct = document.getElementById(id);
      // Extract the span tag
      const span = prodct.querySelector("span");
      // Log the content of the span tag
      console.log(span.textContent);
      console.log(span);
      


      //   const new_element = document.createElement("div");
      //   new_element.innerText = `${span.textContent}`;
      if (cartItems.querySelector("p")) {
        const par = document.getElementById("empty-cart");
        par.remove();
        const new_element = document.createElement("div");
        new_element.innerText = `${span.textContent}`;
        cartItems.appendChild(new_element);
       
      } else {
        console.log("not conatain");
        const new_element = document.createElement("div");
        new_element.innerText = `${span.textContent}`;
        cartItems.appendChild(new_element);
        
      }
    });
  });
  //looping through all the prices and showing it the screen
  console.log(price);
  
});
