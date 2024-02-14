function themeToggle() {
  var r = document.querySelector(":root");
  var currentTheme = getCurrentTheme();

  if (currentTheme === "light") setDarkTheme();
  else setLightTheme();
}

function setTheme(
  primaryColor,
  secondaryColor,
  primaryWave,
  secondaryWave,
  menuColor,
) {
  var r = document.querySelector(":root");
  r.style.setProperty("--primary-color", primaryColor);
  r.style.setProperty("--secondary-color", secondaryColor);
  r.style.setProperty("--primary-wave", primaryWave);
  r.style.setProperty("--secondary-wave", secondaryWave);
  r.style.setProperty("--menu-color", menuColor);
}

function setLightTheme() {
  setTheme("#f9f9f9", "#000000", "#090909", "#909090", "249, 249, 249");
  saveTheme("light");
}

function setDarkTheme() {
  setTheme("#000000", "#ffffff", "#909090", "#090909", "0, 0, 0");
  saveTheme("dark");
}

function getCurrentTheme() {
  return localStorage.getItem("theme") || "dark";
}

function saveTheme(theme) {
  localStorage.setItem("theme", theme);
}

document.addEventListener("DOMContentLoaded", function () {
  window.matchMedia("(prefers-color-scheme: dark)").addListener((e) => {
    const newColorScheme = e.matches ? "dark" : "light";

    if (currentTheme === "light") setDarkTheme();
    else setLightTheme();
  });
});


