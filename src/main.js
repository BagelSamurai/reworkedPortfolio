// Import styles
import "../styles/style.css";
import "../styles/components/particles.css";
// import "../styles/components/preloader.css";
import "../styles/components/hero.css";
import "../styles/components/links.css";
import "../styles/components/about.css";
import "../styles/components/skills.css";
import "../styles/components/projects.css";
import "../styles/components/contact.css";
import "../styles/components/solutions.css";
// Preloader and typewriter effect

// document.addEventListener("DOMContentLoaded", function () {
//   const preloader = document.getElementById("preloader");

//   // Function to hide the preloader after 2 seconds (2000 milliseconds)
//   function hidePreloader() {
//     preloader.style.display = "none"; // Hide the preloader

//     // Typewriter effect starts after the preloader is hidden
//   }

//   // Set a timeout for 2 seconds (2000 milliseconds) before hiding the preloader
//   setTimeout(hidePreloader, 2000);
// });

// Lenis

import Lenis from "@studio-freight/lenis";
const lenis = new Lenis();

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".page-link");
  const linksContainer = document.querySelector(".links-container");

  links.forEach((link) => {
    link.addEventListener("click", smoothScroll);
  });

  function smoothScroll(e) {
    e.preventDefault();

    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: "smooth",
    });
  }

  window.addEventListener("scroll", function () {
    // Check if the page has scrolled more than 50 pixels
    if (window.scrollY > 600) {
      // Add the 'on-scroll' class
      linksContainer.classList.add("on-scroll");
    } else {
      // Remove the 'on-scroll' class if not scrolled more than 50 pixels
      linksContainer.classList.remove("on-scroll");
    }
  });
});
