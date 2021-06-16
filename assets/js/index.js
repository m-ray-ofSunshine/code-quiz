var question1 = {
    question: "How tall are you?",
    answers: ["3ft", "4ft", "5ft", "6ft"],
    correctAnswer: "5ft"
};
var question2 = {
    question: "How old are you?",
    answers: [
        15, 20, 25 , 30
    ],
    correctAnswer: 25
};



var questions = [question1, question2];
var button1 = document.querySelector("#answer1");
var button2 = document.querySelector("#answer2");
var button3 = document.querySelector("#answer3");
var button4 = document.querySelector("#answer4");
var quest = document.querySelector("#question");

function update1() {
    quest.textContent = questions[0].question;
    button1.textContent = questions[0].answers[0];
    button2.textContent = questions[0].answers[1];
    button3.textContent = questions[0].answers[2];
    button4.textContent = questions[0].answers[3];
};
function update2() {
    quest.textContent = questions[1].question;
    button1.textContent = questions[1].answers[0];
    button2.textContent = questions[1].answers[1];
    button3.textContent = questions[1].answers[2];
    button4.textContent = questions[1].answers[3];
};