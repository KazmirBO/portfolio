// Variable to keep track of the number of clicks
var clickCount = 0;

// Function to handle the shake animation on click
function shakeClick() {
  // Incrementing the click count
  clickCount++;

  // Selecting the element to shake
  var shakeText = document.querySelector("#shake");

  // Adding the shake animation class to the element
  shakeText.classList.add("shake-animation");

  // Event listener to remove the shake animation class after the animation ends
  shakeText.addEventListener("animationend", function () {
    shakeText.classList.remove("shake-animation");
  });

  // Checking if the click count reaches 10
  if (clickCount === 10) {
    // Adding a long shake animation class to the element
    shakeText.classList.add("shake-animation-long");

    // Event listener to remove the long shake animation class after the animation ends
    shakeText.addEventListener("animationend", function () {
      shakeText.classList.remove("shake-animation-long");
    });

    // Resetting the click count
    clickCount = 0;

    // Selecting the avatar image
    var avatarImage = document.querySelector("#avatar");

    // Checking if the avatar image exists
    if (avatarImage) {
      // Adding a fade-out animation class to the avatar image
      avatarImage.classList.add("fade-out");

      // Setting a timeout to change the avatar image source after the fade-out animation
      setTimeout(function () {
        avatarImage.classList.remove("fade-out");
        avatarImage.src = "/img/avatar2.png";
      }, 500);
    }

    // Setting a timeout to change the avatar image source to oryginal file
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
