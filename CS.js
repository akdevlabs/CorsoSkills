let currentIndex = 0;
const items = document.querySelectorAll('.RCC-carousel-item');
const totalItems = items.length;
const visibleItems = 3;

document.getElementById('Rcc-nextBtn').addEventListener('click', () => {
  if (currentIndex < totalItems - visibleItems) {
    currentIndex++;
  } else {
    currentIndex = 0; // Loop back to start
  }
  RCCupdateCarousel();
});

document.getElementById('Rcc-prevBtn').addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = totalItems - visibleItems; // Loop back to end
  }
  RCCupdateCarousel();
});

function RCCupdateCarousel() {
  const carousel = document.querySelector('.carousel');
  const itemWidth = items[0].offsetWidth;
  const newTransform = -(itemWidth * currentIndex);
  carousel.style.transform = `translateX(${newTransform}px)`;
}

  


  
  
  // Array of reviews
  const reviewsShow = [
    "Creo en el aprendizaje continuo y Fusion es un excelente lugar para aprender. Aprendí mucho y lo recomiendo a todos mis amigos para clases.",
    "Second review: A wonderful product that exceeded my expectations.",
    "Third review: Good quality, but there is room for improvement.",
    "Fourth review: Not what I expected, but it has its upsides.",
    "Fifth review: Impressive! I would definitely recommend it.",
    "Sixth review: Mediocre service, but the product was fine.",
    "Seventh review: Excellent customer support and fast delivery.",
    "Eighth review: Would buy again, value for money is excellent."
  ];
  
  // Get the review display area and all indicator circles
  const reviewText = document.getElementById("review-text");
  const indicators = document.querySelectorAll(".indicator");
  
  // Add hover event to each indicator
  indicators.forEach((indicator, index) => {
    indicator.addEventListener("mouseover", () => {
      // Update the review text when hovering over an indicator
      reviewText.textContent = reviewsShow[index];
    });
  
    // Optional: Reset the review text when hover ends
    indicator.addEventListener("mouseout", () => {
      reviewText.textContent = "Hover over the circles below to see reviews.";
    });
  });