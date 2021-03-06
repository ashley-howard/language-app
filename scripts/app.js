var correctAnswers = [];
var incorrectAnswers = [];

var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
var button4 = document.getElementById("button4");

var feedback = document.getElementById("feedback");

var continueDiv = document.getElementById("continueDiv");

function round1(selection){
    button1.style.background = "#28a745";
    button1.style.border = "#28a745";

    button2.style.background = "#dc3545";
    button2.style.border = "#dc3545";

    button3.style.background = "#dc3545";
    button3.style.border = "#dc3545";

    button4.style.background = "#dc3545";
    button4.style.border = "#dc3545";

    if(selection === 1){
        feedback.innerHTML = "Correct, good job!";
    }
    else {
        feedback.innerHTML = `Sorry, the correct answer is: ${button1.innerHTML}`;
    }

        // show continue div
        continueDiv.style.display = "block";
};

var userTranslation = document.getElementById("user-translation");
var correctAnswers = ["I am a man.", "I'm a man.", "I am a man", "I'm a man"];

function translation() {
    if(userTranslation.value === ''){
        feedback.innerHTML = feedback.innerHTML = `Please type something.`;
    }
    else if(correctAnswers.includes(userTranslation.value)){
        feedback.innerHTML = "Correct, good job!";
        continueDiv.style.display = "block";
    }
    else if(!correctAnswers.includes(userTranslation.value)){
        feedback.innerHTML = `Sorry, the correct answer is: ${correctAnswers[0]}`;
        continueDiv.style.display = "block";
    }

    
};