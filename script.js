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
setInterval(nextSlide, 5000); // Change slides every 5 seconds (adjust as needed)