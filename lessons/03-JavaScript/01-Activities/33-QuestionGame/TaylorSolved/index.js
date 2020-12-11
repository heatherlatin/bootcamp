var questions = [
    {
        q: "Are Taylor's Eyes Blue?",
        a: true
    }, {
        q: "Is the sky Blue?",
        a: true
    }
];

function askQuestion(index) {
    var questionObj = questions[index];
    var userAnswer = confirm(questionObj.q);
    return userAnswer;
    function inside() {
        var example = 12;
    }
}

function compareAnswers(index, uAnswer) {
    var questionObject = questions[index];
    return uAnswer === questionObject.a;
}

function testUser(index) {
    var answer = askQuestion(index);
    var isCorrect = compareAnswers(index, answer);
    if (isCorrect) {
        alert("Correct!");
    } else {
        alert("Incorrect!");
    }
}


// Main Code:
for (var i = 0; i < questions.length; i++) {
    testUser(i);
}


