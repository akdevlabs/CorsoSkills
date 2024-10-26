let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;
const visibleItems = 3;

document.getElementById('nextBtn').addEventListener('click', () => {
  if (currentIndex < totalItems - visibleItems) {
    currentIndex++;
  } else {
    currentIndex = 0; // Loop back to start
  }
  updateCarousel();
});

document.getElementById('prevBtn').addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = totalItems - visibleItems; // Loop back to end
  }
  updateCarousel();
});

function updateCarousel() {
  const carousel = document.querySelector('.carousel');
  const itemWidth = items[0].offsetWidth;
  const newTransform = -(itemWidth * currentIndex);
  carousel.style.transform = `translateX(${newTransform}px)`;
}
