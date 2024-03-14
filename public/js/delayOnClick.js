// This function delays the redirection to a new URL by fading out certain elements on the current page.
function delay(URL) {
  // Select the content, menu, and footer containers using their respective classes.
  var contentContainer = document.querySelector(".content");
  var menuContainer = document.querySelector(".menu");
  var footerContainer = document.querySelector(".footer");

  // Set the opacity of the content, menu, and footer containers to 0 to fade them out.
  contentContainer.style.opacity = "0";
  menuContainer.style.opacity = "0";
  footerContainer.style.opacity = "0";

  // Set a timeout function to redirect to the new URL after a delay of 500 milliseconds (0.5 seconds).
  setTimeout(function () {
    window.location = URL; // Redirect to the specified URL.
  }, 500); // 500 milliseconds delay
}
