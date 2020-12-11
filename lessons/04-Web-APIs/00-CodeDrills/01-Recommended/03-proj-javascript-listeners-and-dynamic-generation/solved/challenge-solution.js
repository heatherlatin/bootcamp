
// Section 1 creating the array and variables

// 1.1 create a variable called letters with an array of every letter in alphabet (A-Z) as a string
var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// 1.3 create a variable called btns and use getElementById to get the element with id "buttons"
var btns = document.getElementById("buttons");

// Section 2 : DYNAMICALLY make the text on the button
// =================================================================================

// 2.1 Create a for each loop that iterate through the variable letters.
letters.forEach(function (letter) {

  // 2.2 Create a variable named "textButton" equal to the results of document.createElement("button");
  var textButton = document.createElement("button");

  // 2.3. use the variable textButton and add the class letter-button 
  textButton.classList.add("letter-button");

  // 2.5. now give "textButton" a text of the current letter in the loop
  textButton.textContent = letter;



// Section 3 : attaching the button text to a div
// =================================================================================

  // 3.1 Also inside the for each loop, also Create and add a "click" event attached to the textButton variable.
  textButton.addEventListener("click", function () {

    // 3.2 Create a variable called textDiv and and set it equal the results of document.createElement("div");
    var textDiv = document.createElement("div");

    // 3.3 use the variable textDiv and add a class "letter".
    textDiv.classList.add("letter");

    // 3.4 use the var textDiv and add text that is equal to the current letter in the loop
    textDiv.textContent = letter;

    // 3.5 find the id of "display" on the page and append textDiv to it
    document.getElementById("display").appendChild(textDiv);
  })


// Section 4 : attach the button to the page
// =================================================================================

  // 4.6. Final step is to append "textButton" to the variable btns.  Do this outside the click function, but inside the for loop.
  btns.appendChild(textButton);
})
