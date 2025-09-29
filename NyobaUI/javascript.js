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
// UI switching
document.addEventListener("DOMContentLoaded", function () {
  const uiHome = document.getElementById("uiHome");
  const uiSearch = document.getElementById("uiSearch");
  const uiLogin = document.getElementById("uiLogin");

  const menuHome = document.getElementById("menuHome");
  const menuSearch = document.getElementById("menuSearch");
  const menuLogin = document.getElementById("menuLogin");

  function showUI(section) {
    uiHome.style.display = "none";
    uiSearch.style.display = "none";
    uiLogin.style.display = "none";

    section.style.display = "flex"; // pakai flex agar sesuai hero
  }

  menuHome.addEventListener("click", (e) => {
    e.preventDefault();
    showUI(uiHome);
  });

  menuSearch.addEventListener("click", (e) => {
    e.preventDefault();
    showUI(uiSearch);
  });

  menuLogin.addEventListener("click", (e) => {
    e.preventDefault();
    showUI(uiLogin);
  });

  // fungsi search sederhana
  document.getElementById("btnSearch").addEventListener("click", () => {
    const query = document.getElementById("searchInput").value;
    const resultDiv = document.getElementById("searchResult");
    resultDiv.innerHTML = query
      ? `<p>Hasil pencarian untuk: <b>${query}</b></p>`
      : "<p>Masukkan kata untuk mencari</p>";
  });

  // fungsi login sederhana
  document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    alert(`Login berhasil!\nEmail: ${email}`);
    showUI(uiHome); // balik ke home setelah login
  });
});

