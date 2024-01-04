// Import styles
import "../styles/style.css";
import "../styles/components/particles.css";
import "../styles/components/preloader.css";
import "../styles/components/hero.css";
import "../styles/components/links.css";
import "../styles/components/about.css";
import "../styles/components/scroll.css";

// Preloader and typewriter effect

document.addEventListener("DOMContentLoaded", function () {
  const preloader = document.getElementById("preloader");

  // Function to hide the preloader after 2 seconds (2000 milliseconds)
  function hidePreloader() {
    preloader.style.display = "none"; // Hide the preloader

    // Typewriter effect starts after the preloader is hidden
  }

  // Set a timeout for 2 seconds (2000 milliseconds) before hiding the preloader
  setTimeout(hidePreloader, 2000);
});

// Lenis

import Lenis from "@studio-freight/lenis";
const lenis = new Lenis();

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
