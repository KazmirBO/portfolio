// Text to be typed out
const txt = "Sebastian Kolanowski";

// Speed of typing in milliseconds (lower value means faster typing)
const speed = 50;

// Variable to keep track of the current iteration of typing
iteration = 0;

// Variable to track whether typing is currently in progress
isTyping = false;

// Function to simulate typing out the text
function typeWriter() {
  // Check if typing is not already in progress and if there are still characters left to type
  if (!isTyping && iteration < txt.length) {
    // Set typing flag to true
    isTyping = true;

    // Get the element where the text will be displayed and append the next character
    document.getElementById("text").innerHTML += txt.charAt(iteration);

    // Increment the iteration count to move to the next character
    iteration++;

    // Set a timeout to simulate typing speed
    setTimeout(function () {
      // Set typing flag back to false to allow typing to continue
      isTyping = false;

      // Call the typeWriter function again to type the next character
      typeWriter();
    }, speed); // Speed determines the delay between typing each character
  }
}
