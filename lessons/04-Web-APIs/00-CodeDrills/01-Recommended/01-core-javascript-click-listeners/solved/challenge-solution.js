var textDiv = document.getElementById("text-div");
// Write a series of on click listeners for each letter in the html
// Whenever the user clicks on a letter, you want to append the corresponding letter to the `text-div` element
// You will need to set up an on click listener for each letter
//
// Within the document, set an on click listener for the element with a class of "letterA"
document.querySelector(".letterA").addEventListener("click", function () {
    // When that element is clicked, append the string "A" to the `text-div` element
    textDiv.textContent += "A";
})
// Within the document, set an on click listener for the element with a class of "letterB"
document.querySelector(".letterB").addEventListener("click", function () {
    // When that element is clicked, append the string "B" to the `text-div` element
    textDiv.textContent += "B";
})
// Continue for the other letters
document.querySelector(".letterC").addEventListener("click", function () {
    textDiv.textContent += "C";
})
document.querySelector(".letterD").addEventListener("click", function () {
    textDiv.textContent += "D";
})
document.querySelector(".letterE").addEventListener("click", function () {
    textDiv.textContent += "E";
})
document.querySelector(".letterF").addEventListener("click", function () {
    textDiv.textContent += "F";
})
document.querySelector(".letterG").addEventListener("click", function () {
    textDiv.textContent += "G";
})
document.querySelector(".letterH").addEventListener("click", function () {
    textDiv.textContent += "H";
})
document.querySelector(".letterI").addEventListener("click", function () {
    textDiv.textContent += "I";
})
document.querySelector(".letterJ").addEventListener("click", function () {
    textDiv.textContent += "J";
})
document.querySelector(".letterK").addEventListener("click", function () {
    textDiv.textContent += "K";
})
document.querySelector(".letterL").addEventListener("click", function () {
    textDiv.textContent += "L";
})
document.querySelector(".letterM").addEventListener("click", function () {
    textDiv.textContent += "M";
})
document.querySelector(".letterN").addEventListener("click", function () {
    textDiv.textContent += "N";
})
document.querySelector(".letterO").addEventListener("click", function () {
    textDiv.textContent += "O";
})
document.querySelector(".letterP").addEventListener("click", function () {
    textDiv.textContent += "P";
})
document.querySelector(".letterQ").addEventListener("click", function () {
    textDiv.textContent += "Q";
})
document.querySelector(".letterR").addEventListener("click", function () {
    textDiv.textContent += "R";
})
document.querySelector(".letterS").addEventListener("click", function () {
    textDiv.textContent += "S";
})
document.querySelector(".letterT").addEventListener("click", function () {
    textDiv.textContent += "T";
})
document.querySelector(".letterU").addEventListener("click", function () {
    textDiv.textContent += "U";
})
document.querySelector(".letterV").addEventListener("click", function () {
    textDiv.textContent += "V";
})
document.querySelector(".letterW").addEventListener("click", function () {
    textDiv.textContent += "W";
})
document.querySelector(".letterX").addEventListener("click", function () {
    textDiv.textContent += "X";
})
document.querySelector(".letterY").addEventListener("click", function () {
    textDiv.textContent += "Y";
})
document.querySelector(".letterZ").addEventListener("click", function () {
    textDiv.textContent += "Z";
})
// Continue for the other letters

// // Or you could try a more generic solution
// // with the below code: 
// document.addEventListener("click", function (event) {
//   if(event.target.matches("h3")) {
//       textDiv.textContent += event.target.textContent;
//   }
// });