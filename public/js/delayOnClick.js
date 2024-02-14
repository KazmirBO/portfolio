function delay(URL) {
  var contentContainer = document.querySelector(".content");
  var menuContainer = document.querySelector(".menu");
  var footerContainer = document.querySelector(".footer");
  contentContainer.style.opacity = "0";
  menuContainer.style.opacity = "0";
  footerContainer.style.opacity = "0";
  setTimeout(function () {
    window.location = URL;
  }, 500);
}
