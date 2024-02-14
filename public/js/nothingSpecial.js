var clickCount = 0;
function shakeClick() {
  clickCount++;
  var shakeText = document.querySelector("#shake");
  shakeText.classList.add("shake-animation");
  shakeText.addEventListener("animationend", function () {
    shakeText.classList.remove("shake-animation");
  });
  if (clickCount === 10) {
    shakeText.classList.add("shake-animation-long");
    shakeText.addEventListener("animationend", function () {
      shakeText.classList.remove("shake-animation-long");
    });
    clickCount = 0;
    var avatarImage = document.querySelector("#avatar");
    if (avatarImage) {
      avatarImage.classList.add("fade-out");
      setTimeout(function () {
        avatarImage.classList.remove("fade-out");
        avatarImage.src = "/img/avatar2.png";
      }, 500);
    }
    setTimeout(function () {
      if (avatarImage) {
        avatarImage.classList.add("fade-out");
        setTimeout(function () {
          avatarImage.classList.remove("fade-out");
          avatarImage.src = "/img/avatar.jpg";
        }, 500);
      }
    }, 3000);
  }
}
