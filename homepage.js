// Get all the game card elements
const gameCards = document.querySelectorAll('.game-card');

// Add event listeners for hover effect to each game card
gameCards.forEach(card => {
    const video = card.querySelector('.preview-video');

    card.addEventListener('mouseenter', () => {
        video.play();
    });

    card.addEventListener('mouseleave', () => {
        video.pause();
        video.currentTime = 0; // Reset video to the beginning
    });
});

  // Add event listeners to "Add to Cart" buttons
const addToCartBtns = document.querySelectorAll('.add-to-cart-btn');
  addToCartBtns.forEach(btn => {
    btn.addEventListener('click', addToCart);
});

  // Function to handle adding items to the cart
function addToCart(event) {
    event.preventDefault();

    // Retrieve the game information from the clicked button's data attributes
    const title = event.target.dataset.title;
    const price = parseFloat(event.target.dataset.price);
    const image = event.target.dataset.image;
    const button = event.target;

    // Store the game information in local storage
    let cartItems = localStorage.getItem('cartItems');
    cartItems = cartItems ? JSON.parse(cartItems) : [];
    cartItems.push({ title, price, image });//we add the information as an object to the array
    //Convert the cartItems array back to a string and store it in local storage
    localStorage.setItem('cartItems', JSON.stringify(cartItems));

    // Update the cart counter
    const cartCounter = document.getElementById('cart-counter');
    cartCounter.textContent = cartItems.length;

}
// Add event listener to the document for click events
document.addEventListener('click', function(event) {
  // Check if the clicked element has the "add-to-cart-btn" class
  if (event.target.classList.contains('add-to-cart-btn')) {
    event.preventDefault();

    // Retrieve data from the clicked button's attributes
    const title = event.target.getAttribute('data-title');
    const price = parseFloat(event.target.getAttribute('data-price'));
    const image = event.target.getAttribute('data-image');

    // Show the alert message
    alert(`${title} has been added to your cart successfully!`);
  }
});
// Smooth scrolling functionality
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});


