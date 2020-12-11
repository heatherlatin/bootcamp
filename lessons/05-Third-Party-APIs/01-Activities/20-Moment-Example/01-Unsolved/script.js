// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //
// Variables
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //

var $currentTimeElem = $("#current-time");
var $fiveDaysElem = $("#five-days");
var $hourInput = $("#hour-input");
var $checkHoursBtn = $("#check-hours");
var $isBeforeElem = $("#is-before");

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //
// Main Program
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //

startClock();
getFiveDaysBeforeNow();
$checkHoursBtn.click(checkIfHoursIsBefore);

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //
// Your Changes:
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //

function startClock() {
    setInterval(function () {
        // TODO: use moment to get current time and store it in a variable
        // named currentTime.

        // TODO: update the text of $currentTimeElem to be currentTime formatted to:
        // Hours:Minutes:Seconds AM/PM
    }, 1000)
}

function getFiveDaysBeforeNow() {
    // TODO: use moment to get current time and store it in a variable
    // named currentTime.
    
    // TODO: use currentTime's subtract method to subtract 5 days from
    // the current time and store it in a variable named fiveDaysBefore.

    // TODO: update the text of $fiveDaysElem to be fiveDaysBefore formatted to:
    // (day of week) (month name) (day in 1st, 2nd, 3rd... format), year
    // e.g. Mon August 3rd, 2019
}

function checkIfHoursIsBefore(event) {
    event.preventDefault();
    var format = "HH:mm:ss";
    function hourStringify(hour) {
        // invalid cases return 00
        if (hour <= 0 || hour >= 24) {
            return "00:00:00";
        }
        // if it's less than ten add a 0 in front
        if (hour < 10) {
            return "0" + hour + ":00:00";
        }
        // otherwise just add the end :00:00 to the number
        return hour + ":00:00";
    }
    // TODO: use moment to get current time and format it to the format given
    // then store it in a variable named currentTimeHours. 
    
    // TODO: use jQuery to get the value stored in the $hourInput and store it in a variable named value.
    // the input should be 0,1,2,3,4,5...,23
    // use hourStringify to turn the input number to a string and store it in a variable named timeToCheck

    // TODO: use isBefore to check if currentTimeHours isBefore timeToCheck
    // update the text of $isBeforeElem to be "true" if now is before that time.
    // and "false" if now is after that time.
}