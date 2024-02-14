const txt = "Sebastian Kolanowski";
const speed = 50;
var iteration = 0;
var isTyping = false;

function typeWriter() {
  if (!isTyping && iteration < txt.length) {
    isTyping = true;
    document.getElementById("text").innerHTML += txt.charAt(iteration);
    iteration++;
    setTimeout(function () {
      isTyping = false;
      typeWriter();
    }, speed);
  }
}
