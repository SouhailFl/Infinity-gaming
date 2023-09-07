// Retrieve cart items from local storage
  let cartItems = localStorage.getItem('cartItems');
  cartItems = cartItems ? JSON.parse(cartItems) : [];

  // Get the container element to display cart items
  const cartItemsContainer = document.getElementById('cart-items-container');

  // Iterate over the cart items and dynamically create elements to display them
  cartItems.forEach(item => {
    const { title, price, image } = item;

    // Create the card element for the cart item
    const card = document.createElement('div');
    card.className = 'card mb-3';
    card.innerHTML = `
      <div class="row g-0">
        <div class="col-md-3">

          <img src="${image}" alt="Game Image" class="img-fluid">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">${title}</h5>
            <p class="card-text price">$${price}</p>
          </div>
        </div>
      </div>
    `;

    // Append the card element to the container
    //does the add card as child of the container means inside the container 
    cartItemsContainer.appendChild(card);
  });

  // Calculate and display the total price
  const cartTotalPrice = document.getElementById('cart-total-price');
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);
  cartTotalPrice.textContent = `Cart Total: $${totalPrice.toFixed(2)}`;

// Function to clean/reset the cart
function cleanCart() {
  // Remove all cart items from local storage
  localStorage.removeItem('cartItems');

  // Clear the cart items container on the cart page
  const cartItemsContainer = document.getElementById('cart-items-container');
  cartItemsContainer.innerHTML = '';

  // Update the cart counter to zero
  const cartCounter = document.getElementById('cart-counter');
  cartCounter.textContent = '0';

  // Reset the total price to zero
  const cartTotalPrice = document.getElementById('cart-total-price');
  cartTotalPrice.textContent = 'Cart Total: $0.00';
}
