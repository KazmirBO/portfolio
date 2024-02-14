document.addEventListener("DOMContentLoaded", function () {
  var loadingContainer = document.getElementById("loading-container");
  var contentContainer = document.querySelector(".content");
  var menuContainer = document.querySelector(".menu");
  var footerContainer = document.querySelector(".footer");

  setTimeout(function () {
    loadingContainer.style.opacity = "1";
    loadingContainer.style.transition = "opacity 0.5s ease-out";
  }, 500);

  window.addEventListener("load", function () {
    setTimeout(function () {
      loadingContainer.style.display = "none";

      contentContainer.style.display = "block";
      contentContainer.style.transition = "opacity 0.5s ease-out";
      contentContainer.style.opacity = "1";
      menuContainer.style.opacity = "1";
      footerContainer.style.opacity = "1";
    }, 750);
    setTimeout(function () {
      if (document.getElementById("text") !== null) typeWriter();
    }, 1000);
  });
});
