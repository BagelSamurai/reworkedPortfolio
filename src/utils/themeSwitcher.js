const darkMode = () => {
  const themeToggleBtns = document.querySelectorAll("#theme-toggle");

  const theme = localStorage.getItem("theme");

  if (theme) {
    document.body.classList.add(theme);
  }

  const handleThemeToggle = () => {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
      localStorage.setItem("theme", "dark-mode");
    } else {
      localStorage.removeItem("theme");
      localStorage.removeItem("imageTheme");
      document.body.classList.remove("dark-mode"); // Remove specific theme class
    }
  };

  themeToggleBtns.forEach((btn) =>
    btn.addEventListener("click", handleThemeToggle)
  );
};

export default darkMode;
