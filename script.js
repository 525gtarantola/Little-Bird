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

// Add to cart button click handler
document.querySelectorAll('.btn-add-to-cart').forEach((button, index) => {
  button.addEventListener('click', () => {
    const productTitle = document.querySelectorAll('.card-title')[index].innerText;
    const productPrice = document.querySelectorAll('.card-text')[index].innerText;
    const quantity = parseInt(document.querySelectorAll('.quantity-input')[index].value);

    // Check if the item is already in the cart
    let found = false;
    for (let i = 0; i < cartItems.length; i++) {
      if (cartItems[i].title === productTitle) {
        cartItems[i].quantity += quantity;
        found = true;
        break;
      }
    }

    // If not found, add a new item to the cart
    if (!found) {
      const item = { title: productTitle, price: productPrice, quantity: quantity };
      cartItems.push(item);
    }

    updateCartBadge();
    updateCartModal();
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

// Update cart modal content
function updateCartModal() {
  const cartList = document.getElementById('cart-list');
  cartList.innerHTML = '';

  cartItems.forEach(item => {
    const li = document.createElement('li');
    li.classList.add('list-group-item');
    li.innerText = `${item.title} - ${item.price} x ${item.quantity}`;

    cartList.appendChild(li);
  });
}