function toggleFlip() {
  console.log("Card clicked!"); // To check if the event is triggered
  if (window.innerWidth <= 768) { // Only trigger on mobile
    const card = document.querySelector(".flip-card");
    card.classList.toggle("flipped"); // Toggle the flipped class
  }
}

// Wait for DOM content to be loaded before attaching the event listener
document.addEventListener("DOMContentLoaded", function () {
  const card = document.querySelector(".flip-card");
  
  // Add both click and touch events for mobile devices
  card.addEventListener("click", toggleFlip);
  // card.addEventListener("touchstart", toggleFlip);
});
