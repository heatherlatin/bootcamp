var poem = "Some say the world will end in 🔥, Some say in ice. From what I’ve tasted of desire, I hold with those who favor fire. But if it had to perish twice, I think I know enough of hate. To say that for destruction ice, Is also great, And would suffice.";
var words = poem.split(" ");

var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("main");
var readText = document.getElementById("read-text");

var secondsLeft = 5;
var readInterval = 500;
var wordIndex = 0;

function prepareRead() {
  // Create the countdown timer.
  var readIntervalStr = prompt("Please enter the speed to read.");
  readInterval = parseInt(readIntervalStr);
  if (isNaN(readInterval)) {
    alert("Incorrect input");
  }
  timeEl.textContent = secondsLeft + " seconds left till reading.";

  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left till reading.";

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      speedRead();
    }

  }, 1000);
}

function speedRead() {
  // Print words to the screen one at a time.
  console.log("Speed Read now.");
  mainEl.textContent = "";
  timeEl.textContent = "";
  readText.textContent = words[wordIndex];
}

prepareRead();