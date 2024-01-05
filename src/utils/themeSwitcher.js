const darkMode = () => {
  const themeToggleBtns = document.querySelectorAll("#theme-toggle");
  const img = document.querySelector("#webfolio-image");
  const theme = localStorage.getItem("theme");

  if (theme) {
    document.body.classList.add(theme);
  }

  const handleThemeToggle = () => {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
      localStorage.setItem("theme", "dark-mode");
      img.src = "/public/webfolio_dark.png";
    } else {
      localStorage.removeItem("theme");
      localStorage.removeItem("imageTheme");
      document.body.classList.remove("dark-mode"); // Remove specific theme class
      img.src = "/public/webfolio_light.png";
    }
  };

  themeToggleBtns.forEach((btn) =>
    btn.addEventListener("click", handleThemeToggle)
  );
};

export default darkMode;
