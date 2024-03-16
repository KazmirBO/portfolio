// This event listener waits for the DOM content to be fully loaded before executing the provided function.
document.addEventListener("DOMContentLoaded", function () {
  // Selecting the loading container and other elements by their IDs or classes.
  var loadingContainer = document.getElementById("loading-container");
  var contentContainer = document.querySelector(".content");
  var menuContainer = document.querySelector(".menu");
  var footerContainer = document.querySelector(".footer");

  // Setting a timeout function to gradually fade in the loading container after a delay of 500 milliseconds (0.5 seconds).
  setTimeout(function () {
    loadingContainer.style.opacity = "1"; // Fading in the loading container.
    loadingContainer.style.transition = "opacity 0.5s ease-out"; // Adding a CSS transition for smooth fading.
  }, 500);

  // Adding an event listener for when the window and its dependencies are fully loaded.
  window.addEventListener("load", function () {
    // Setting a timeout function to hide the loading container and fade in the content after a delay of 750 milliseconds (0.75 seconds).
    setTimeout(function () {
      loadingContainer.style.display = "none"; // Hiding the loading container.

      // Fading in the content container and other elements.
      contentContainer.style.display = "block";
      contentContainer.style.transition = "opacity 0.5s ease-out";
      contentContainer.style.opacity = "1";
      menuContainer.style.opacity = "1";
      footerContainer.style.opacity = "1";
    }, 1000);

    // Setting a timeout function to check if an element with the ID "text" exists, and if so, execute the "typeWriter" function after a delay of 1000 milliseconds (1 second).
    setTimeout(function () {
      if (document.getElementById("text") !== null) typeWriter(); // Checking if the element with ID "text" exists and executing the "typeWriter" function if it does.
    }, 1500);
  });
});
