var questions = [
    {
        question: "What is the capital of Minnesota?",
        answers: ["Minneapolis", "Bloomington", "St. Paul", "Rochester"],
        correctAnswer: "St. Paul"
    },
    {
        question: "What is the population of Minnesota?",
        answers: [
            "4.5 million", "5.5 million", "6.5 million", "7.5 million"
        ],
        correctAnswer: "5.5 million"
    },
    {
        question: "Minnesota's nickname is 'Land of 10,000 Lakes'. How many lakes(over 10 acres) are actually in MN ?",
        answers: [
            "11842", "9892", "12031", "10524"
        ],
        correctAnswer: "11842"
    },
    {
        question: "What is Minnesota's state bird?",
        answers: [
            "Western Meadowlark", "Ring-necked Pheasant", "American Robin", "Common Loon"
        ],
        correctAnswer: "Common Loon"
    },
    {
        question: "What is Minnesota's state flower?",
        answers: [
            "Pink and White Lady's Slipper", "Apple Blossom", "Common Blue Violet", "Praire Rose"
        ],
        correctAnswer: "Pink and White Lady's Slipper"
    },
    {
        question: "What is Minnesota's state tree?",
        answers: [
            "Bur Oak", "Red Pine", "Sugar Maple", "Longleaf Pine"
        ],
        correctAnswer: "Red Pine"
    },
    {
        question: "What is Minnesota's state gemstone?",
        answers: [
            "Star Blue Quartz", "Lake Superior Agate", "Isle Royale Greenstone", "Fairburn Agate"
        ],
        correctAnswer: "Lake Superior Agate"
    },
    {
        question: "Which one of these is not a famous Minnesotan Musician?",
        answers: [
            "Atmosphere", "Bon Iver", "Prince", "Bob Dylan"
        ],
        correctAnswer: "Bon Iver"
    },
    {
        question: "What do Minnesotans order at a resturant when they would like a carbonated beverage?",
        answers: [
            "Soda", "Water", "Coke", "Pop"
        ],
        correctAnswer: "Pop"
    },
    {
        question: "Which of these sports teams are not a professional team?",
        answers: [
            "Gophers", "Twins", "Lynx", "Wild"
        ],
        correctAnswer: "Gophers"
    },
];






var button1 = document.querySelector("#answer1");
var button2 = document.querySelector("#answer2");
var button3 = document.querySelector("#answer3");
var button4 = document.querySelector("#answer4");
var heading = document.querySelector("#heading");
var list = document.querySelector("#list");
var startButton = document.querySelector("#startButton");
var directions = document.querySelector("#directions");
var timer = document.querySelector("#timer");
var wrongMessage = document.querySelector("#wrong");
var form = document.querySelector("#form");
var submitButton = document.querySelector("#submit")
var initials = document.getElementById("initials")
var highScores =[{
    highScore: "finalScore",
    nameAbrv: "initials.value"
}];

var secondsLeft = 90
var finalScore = ""
var timerInterval;
var idx = 0

startButton.addEventListener("click", start)




list.addEventListener("click", function (e) {
    var button = e.target
    if (button.getAttribute("correct") === "true") {
        idx++;
        while (list.firstChild) {
            list.firstChild.remove()
        }
        displayQuestion();
    }
    
    
    
    
}
);

submitButton.addEventListener("click", function(e) {
    e.preventDefault();
    
    for (i=0; i < highScores.length; i++) {
        
    var score = {
            highScore: finalScore,
            nameAbrv: initials.value
        }
        highScores.push(score);
        console.log(highScores);
    }
    localStorage.setItem("winner", JSON.stringify(highScores));
})

function start() {

    timerInterval = setInterval(function () {
        secondsLeft--;
        timer.textContent = secondsLeft;
        if (secondsLeft === 0) {
            secondsLeft = 90;
            clearInterval(timerInterval);
            
        }
    }
        , 1000)
    displayQuestion();

    list.style.display = "flex";
    startButton.style.display = "none";
    directions.style.display = "none";
}

function displayQuestion() {
    if (idx > 9) {
        finish();
        
    } else {
        
        heading.textContent = questions[idx].question;
        for (i = 0; i < questions[idx].answers.length; i++) {
            var li = document.createElement("button")
            li.textContent = questions[idx].answers[i];
            if (li.textContent === questions[idx].correctAnswer) {
                li.setAttribute("correct", true)
            } else {
                li.setAttribute("correct", false)
            }
            list.appendChild(li);

        }

    }

};

function finish() {
    finalScore = secondsLeft
    timer.style.display = "none"
    secondsLeft = 0
    list.style.display = "none";

    directions.textContent = "Your final score is " + finalScore
    directions.style.display = "block";
    heading.textContent = "You have finished!";
    directions.style.display = "block";
    form.style.display = "block"
}

