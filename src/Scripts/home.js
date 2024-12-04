let currentSlide = 0;
const slides = document.querySelectorAll(".carousel-slide");
const puntos = document.querySelectorAll(".bottom-4 button");

function showSlide(index) {
  slides.forEach((slide) => (slide.style.opacity = "0"));
  puntos.forEach((punto) => (punto.style.opacity = "0.5"));
  slides[index].style.opacity = "1";
  puntos[index].style.opacity = "1";
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

// Initialize carousel
showSlide(0);
setInterval(nextSlide, 5000);

// Add click events to puntos
puntos.forEach((punto, index) => {
  punto.addEventListener("click", () => {
    currentSlide = index;
    showSlide(currentSlide);
  });
});
