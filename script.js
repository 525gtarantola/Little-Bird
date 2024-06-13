// JavaScript for hero slideshow
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const slideCount = slides.length;

function showSlide() {
  slides.forEach(slide => {
    slide.classList.remove('active');
  });
  slides[slideIndex].classList.add('active');
}

function nextSlide() {
  slideIndex = (slideIndex + 1) % slideCount;
  showSlide();
}

// Initial call to start slideshow
showSlide();
setInterval(nextSlide, 5000); 



// SHOPPING CART START 

// Cart functionality
let cartItems = [];

document.addEventListener('DOMContentLoaded', function() {
  // Add to cart button click handler
  document.querySelectorAll('.btn-add-to-cart').forEach((button, index) => {
    button.addEventListener('click', () => {
      const productTitle = document.querySelectorAll('.card-title')[index].innerText;
      const productPrice = document.querySelectorAll('.card-text')[index].innerText;

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