document.addEventListener("DOMContentLoaded", function () {
  const preloader = document.getElementById("preloader");
  const div = document.querySelector(".hero-text");
  const text = "ROHAN CHAUDHARY";

  // Function to hide the preloader after 2 seconds (2000 milliseconds)
  function hidePreloader() {
    preloader.style.display = "none"; // Hide the preloader

    // Typewriter effect starts after the preloader is hidden
    typewriterEffect(div, text);
  }

  // Set a timeout for 2 seconds (2000 milliseconds) before hiding the preloader
  setTimeout(hidePreloader, 2000);
});

const typewriterEffect = (element, text, i = 0) => {
  element.textContent += text[i];
  if (i < text.length - 1) {
    setTimeout(() => typewriterEffect(element, text, i + 1), 150);
  }
};
