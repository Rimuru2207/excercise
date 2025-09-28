// Generate floating shapes dynamically
const floatingShapesContainer = document.querySelector('.floating-shapes');

// Function to generate a random number within a range
function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

// Function to create and animate shapes
function createShape() {
  const shape = document.createElement('div');
  shape.classList.add('shape');

  // Random size, position, and animation duration
  const size = randomInRange(50, 150);
  shape.style.width = `${size}px`;
  shape.style.height = `${size}px`;

  shape.style.top = `${randomInRange(0, 70)}%`;
  shape.style.left = `${randomInRange(0, 90)}%`;

  const animationDuration = randomInRange(3, 8);
  shape.style.animationDuration = `${animationDuration}s`;

  floatingShapesContainer.appendChild(shape);

  // Remove shape after animation ends
  setTimeout(() => {
    shape.remove();
  }, animationDuration * 1000);
}

// Create multiple shapes at intervals
setInterval(createShape, 1000);

// Button click interaction
const connectButton = document.querySelector('.connect-btn');
connectButton.addEventListener('click', () => {
  alert('Thank you for connecting! 🚀');
});
