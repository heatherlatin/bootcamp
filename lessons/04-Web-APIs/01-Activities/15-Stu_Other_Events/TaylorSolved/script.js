var eventType = document.querySelector("#event-type"); 
var mouseEventsEl = document.querySelector("#click-events");
var keyEventsEl = document.querySelector("#key-events");

// my click elements:
var xElem = document.getElementById("x");
var yElem = document.getElementById("y");
var targetElem = document.getElementById("target");

// my key elements:
var keyElem = document.getElementById("key");
var codeElem = document.getElementById("code");
var statusElem = document.getElementById("status");

function toggleDisplay(event) {
  var value = event.target.value;
  if(value === "keydown") {
    mouseEventsEl.classList.add("hide");
    keyEventsEl.classList.remove("hide");
  }
  else {
    mouseEventsEl.classList.remove("hide");
    keyEventsEl.classList.add("hide");
  }
}

eventType.addEventListener("change", toggleDisplay);

document.addEventListener("click", function whenClicked(event) {
  console.log("coordinates x: ", event.x);
  xElem.textContent = event.x;
  console.log("coordinates y: ", event.y);
  yElem.textContent = event.y;
  console.log("text content: ", event.target.textContent);
  targetElem.textContent = event.target.textContent;
});

function keyEvents(event) {
  console.log("key code: ", event.code);
  codeElem.textContent = event.code;
  console.log("key pressed: ", event.key);
  keyElem.textContent = event.key;
  console.log("event status: ", event.type);
  statusElem.textContent = event.type;
}

document.addEventListener("keydown", keyEvents);

document.addEventListener("keyup", keyEvents);