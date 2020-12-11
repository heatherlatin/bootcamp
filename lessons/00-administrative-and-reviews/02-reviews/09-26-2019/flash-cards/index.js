// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
// Variables: 
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

var mainElem = document.getElementById("main-content");
var currentIndex = 0;
var flashCards = [{
        front: "cookie",
        back: "A sweet snack that is good to eat."
    },{
        front: "cat",
        back: "A sweet pet that is not good to eat."
    }];

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
// Main Program: 
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

pageLoad();

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
// Functions: 
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

function pageLoad() {
    var startBtn = document.createElement("a");
    startBtn.setAttribute("class", "waves-effect waves-light btn");
    startBtn.textContent = "Start Reviewing";
    mainElem.appendChild(startBtn);
    startBtn.addEventListener("click", function (event) {
        event.preventDefault();
        playFlashCard();
    });
}

function endGame() {
    currentIndex = 0;
    mainElem.innerHTML = "";
    pageLoad();
    var resultsDiv = document.createElement("div");
    resultsDiv.textContent = JSON.stringify(flashCards);
    mainElem.appendChild(resultsDiv);
}

function startTimer(card) {
    var time = 15;
    var intervalId = setInterval(function () {
        time--;
        var timeDisplay = document.getElementById("timer-countdown");
        if (timeDisplay) {
            timeDisplay.textContent = time;
        }
        if (time === 0) {
            buildCard(card, false, null, true);
            clearInterval(intervalId);
        }
    }, 1000);
    return intervalId;
}

function playFlashCard() {
    var currentFlashCard = flashCards[currentIndex];
    if (currentFlashCard) {
        var intervalId = startTimer(currentFlashCard);
        buildCard(currentFlashCard, true, intervalId);
        currentIndex++;
    } else {
        // TODO: end of flash card summary.
        endGame();
    }
}

function buildCardAction(text, action, timerId) {
    var cardActionLink = document.createElement("a");
    cardActionLink.setAttribute("href", "#");
    cardActionLink.textContent = text;
    cardActionLink.addEventListener("click", function (event) {
        event.preventDefault();
        clearInterval(timerId);
        if(action && typeof action === "function") {
            action();
        }
    });
    return cardActionLink;
}

function buildFeelingLink(card, text, isTimeOut) {
    var feelingLink = buildCardAction(text, function () {
        if (!(card.views && card.views.length)) {
            card.views = [];
        }
        // to add to end of array use push
        // for front of array use:
        card.views.unshift({
            feeling: text,
            timedOut: isTimeOut
        });
        playFlashCard();
    });
    return feelingLink;
}

function buildCard(card, isFront, timerId, isTimeOut) {
    mainElem.innerHTML = "";
    var cardElem = document.createElement("div");
    cardElem.setAttribute("class", "card blue-grey darken-1");

    var cardContentElem = document.createElement("div");
    cardContentElem.setAttribute("class", "card-content white-text");

    var cardTitleElem = document.createElement("span");
    cardTitleElem.setAttribute("class", "card-title");

    var cardTextElem = document.createElement("p");

    var cardActionElem = document.createElement("div");
    cardActionElem.setAttribute("class", "card-action");
    
    cardContentElem.appendChild(cardTitleElem);
    cardContentElem.appendChild(cardTextElem);
    cardElem.appendChild(cardContentElem);
    cardElem.appendChild(cardActionElem);

    if (isFront) {
        cardTitleElem.textContent = "Front of the Card!";
        cardTextElem.textContent = card.front;
    
        var cardFinishedElem = buildCardAction("I know it!", function () {
            buildCard(card, false, null, false);
        }, timerId);
        
        var cardTimerElem = buildCardAction("15");
        cardTimerElem.setAttribute("id", "timer-countdown");

        cardActionElem.appendChild(cardFinishedElem);
        cardActionElem.appendChild(cardTimerElem);

    } else {
        cardTitleElem.textContent = "Back of the Card!";
        cardTextElem.textContent = card.back;
    
        var nailedItElem = buildFeelingLink(card, "Nailed it!", isTimeOut);
        var needsWorkElem = buildFeelingLink(card, "Needs work...", isTimeOut);
        var failedItElem = buildFeelingLink(card, "Failed it!", isTimeOut);

        cardActionElem.appendChild(nailedItElem);
        cardActionElem.appendChild(needsWorkElem);
        cardActionElem.appendChild(failedItElem);
    }

    mainElem.appendChild(cardElem);
}

// flash card object:
// var flashCard = {
//     front: "cookie",
//     back: "A sweet snack that is good to eat.",
//     views: [{
//         timedOut: true/false,
//         feeling: "Nailed It!"
//     },... {
//         timedOut: true/false,
//         feeling: "Nailed It!"
//     }]
// };