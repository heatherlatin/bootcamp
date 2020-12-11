var count = 0;
var countElem = document.getElementById("count");
var incrementBtn = document.getElementById("increment");

incrementBtn.addEventListener("click", function () {
    count++;
    console.log(count);
    countElem.textContent = count;
});

var decrementBtn = document.getElementById("decrement");

decrementBtn.addEventListener("click", function () {
    if (count <= 0) {
        count = 0;
    } else {
        count--;
    }
    console.log(count);
    countElem.textContent = count;
});