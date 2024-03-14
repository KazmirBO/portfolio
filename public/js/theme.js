// Function to toggle between light and dark themes
function themeToggle() {
  var currentTheme = getCurrentTheme();

  // If the current theme is light, switch to dark theme; otherwise, switch to light theme
  if (currentTheme === "light") setDarkTheme();
  else setLightTheme();
}

// Function to set the theme colors
function setTheme(
  primaryColor,
  secondaryColor,
  primaryWave,
  secondaryWave,
  menuColor,
) {
  // Selecting the root element of the document
  var r = document.querySelector(":root");

  // Setting custom CSS properties to define the theme colors
  r.style.setProperty("--primary-color", primaryColor);
  r.style.setProperty("--secondary-color", secondaryColor);
  r.style.setProperty("--primary-wave", primaryWave);
  r.style.setProperty("--secondary-wave", secondaryWave);
  r.style.setProperty("--menu-color", menuColor);
}

// Function to set the light theme
function setLightTheme() {
  // Setting specific colors for the light theme
  setTheme("#f9f9f9", "#000000", "#090909", "#909090", "249, 249, 249");

  // Saving the light theme to local storage
  saveTheme("light");
}

// Function to set the dark theme
function setDarkTheme() {
  // Setting specific colors for the dark theme
  setTheme("#000000", "#ffffff", "#909090", "#090909", "0, 0, 0");

  // Saving the dark theme to local storage
  saveTheme("dark");
}

// Function to get the current theme from local storage, defaulting to dark theme if not set
function getCurrentTheme() {
  return localStorage.getItem("theme") || "dark";
}

// Function to save the chosen theme to local storage
function saveTheme(theme) {
  localStorage.setItem("theme", theme);
}

// Event listener to set the theme on DOM content load
document.addEventListener("DOMContentLoaded", function () {
  var currentTheme = getCurrentTheme();

  // Setting the theme based on the current theme retrieved from local storage
  if (currentTheme === "light") {
    setLightTheme(); // Set light theme if current theme is light
  } else {
    setDarkTheme(); // Set dark theme by default or if current theme is not specified
  }
});
