var eventType = document.querySelector("#event-type"); 
var mouseEventsEl = document.querySelector("#click-events");
var keyEventsEl = document.querySelector("#key-events");

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

document.addEventListener("click", function (event) {
  console.log("click", event);
});

document.addEventListener("keydown", function (event) {
  console.log("keydown", event);
});

document.addEventListener("keyup", function (event) {
  console.log("keyup", event);
});