var correctAnswers = [];
var incorrectAnswers = [];

var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
var button4 = document.getElementById("button4");

var feedback = document.getElementById("feedback");


function round1(selection){

    // change colour
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

};