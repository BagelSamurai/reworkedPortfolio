// Import styles
import "../styles/style.css";
import "../styles/components/particles.css";
import "../styles/components/preloader.css";
import "../styles/components/hero.css";
import "../styles/components/links.css";
import "../styles/components/about.css";
// Preloader and typewriter effect

document.addEventListener("DOMContentLoaded", function () {
  const preloader = document.getElementById("preloader");

  // Function to hide the preloader after 2 seconds (2000 milliseconds)
  function hidePreloader() {
    preloader.style.display = "none"; // Hide the preloader

    // Typewriter effect starts after the preloader is hidden
  }

  // Set a timeout for 2 seconds (2000 milliseconds) before hiding the preloader
  setTimeout(hidePreloader, 1000);
});

// Theme switcher
const themeButton = document.getElementById("theme-toggler");
const body = document.body;
const themeImage = document.getElementById("my-image");

themeButton.addEventListener("click", function () {
  if (body.classList.contains("dark-theme")) {
    body.classList.remove("dark-theme");
    themeImage.src = "./public/me.png"; // Change image source for light theme
  } else {
    body.classList.add("dark-theme");
    themeImage.src = "./public/me_dark.png"; // Change image source for dark theme
  }
});

// Gsap;
import { gsap } from "gsap";

let tl = gsap.timeline({ defaults: { ease: "bounce.in", duration: 2 } });

tl.to(".hero-text", {
  clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
  visibility: "visible",
  y: 0,

  onComplete: function () {
    // Start the second animation after the first one completes
    gsap.to("#my-image", {
      clipPath: "circle( 100%)",
      visibility: "visible",
      y: 0,
      duration: 1,
      onComplete: function () {
        // Start the third animation after the second one completes
        gsap.to(".links-container", {
          clipPath: "circle(100%)",
          visibility: "visible",
          y: 0,
          duration: 1,
        });
      },
    });
  },
});
