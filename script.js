// JavaScript for hero slideshow
let slideIndex = 0;  // keeps track of current slide index
const slides = document.querySelectorAll('.slide');  
const slideCount = slides.length;

function showSlide() {  // Function to display the current slide by adding the 'active' class to it and removing the 'active' class from other slides.
  slides.forEach(slide => {
    slide.classList.remove('active');
  });
  slides[slideIndex].classList.add('active');
}

function nextSlide() {  // Function to advance to the next slide by incrementing slideIndex and calling showSlide().
  slideIndex = (slideIndex + 1) % slideCount;
  showSlide();
}

// Initial call to start slideshow
showSlide();
setInterval(nextSlide, 5000); //  Interval function to automatically advance to the next slide every 5 seconds (5000 milliseconds). 



// SHOPPING CART START 

// Cart functionality
let cartItems = [];  // --> Array to store items in the shopping cart.

document.addEventListener('DOMContentLoaded', function() {   // --> event listener: Ensures that the DOM content is fully loaded before executing JavaScript.
  // Add to cart button click handler
  document.querySelectorAll('.btn-add-to-cart').forEach((button, index) => {    // --> event listener: Ensures that the DOM content is fully loaded before executing JavaScript.  loop to add event listeners to all 'Add to Cart' buttons:
    button.addEventListener('click', () => {
      const productTitle = document.querySelectorAll('.card-title')[index].innerText;     
      const productPrice = document.querySelectorAll('.card-text')[index].innerText;     // --> what this is SUPPOSED to do is When a button is clicked, it retrieves the title and price of the corresponding product 
 
      // Check if the item is already in the cart
      let found = false;
      for (let i = 0; i < cartItems.length; i++) { 
        if (cartItems[i].title === productTitle) {
          cartItems[i].quantity += 1;
          found = true;
          break;
        }
      }

      // If not found, add a new item to the cart
      if (!found) {
        const item = { title: productTitle, price: productPrice, quantity: 1 };
        cartItems.push(item);
      }

      updateCartBadge();
    });
  });

  // Update cart badge
  function updateCartBadge() {
    const cartBadge = document.getElementById('cart-badge');
    let totalCount = 0;
    cartItems.forEach(item => {
      totalCount += item.quantity;
    });
    cartBadge.innerText = totalCount;
  }
});