let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
  if(index < 0) index = slides.length - 1;
  if(index >= slides.length) index = 0;
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
  currentSlide = index;
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

function nextSlide() {
  showSlide(currentSlide + 1);
}
