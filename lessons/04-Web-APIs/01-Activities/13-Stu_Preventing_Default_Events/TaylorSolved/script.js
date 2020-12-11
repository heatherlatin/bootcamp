var priceElem = document.getElementById("price");
var tipPercentageElem = document.getElementById("tip-percentage");
var submitBtn = document.getElementById("submit");
var tipAmountElem = document.getElementById("tip-amount");
var newTotalElem = document.getElementById("new-total");

submitBtn.addEventListener("click", function (event) {
    event.preventDefault();
    console.log(priceElem.value);
    var price = parseFloat(priceElem.value);
    console.log(tipPercentageElem.value);
    var tipPercentage = parseFloat(tipPercentageElem.value) / 100;
    console.log(price * tipPercentage);

    var tipAmount = price * tipPercentage;
    var newTotal = tipAmount + price;

    var tipAmountCorrected = tipAmount.toFixed(2);
    tipAmountElem.textContent = tipAmountCorrected;
    var newTotalCorrected = newTotal.toFixed(2);
    newTotalElem.textContent = newTotalCorrected;
});

