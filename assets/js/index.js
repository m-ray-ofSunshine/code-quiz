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



startButton.addEventListener("click", function () {

    update1()
    list.style.display = "block";
    startButton.style.display = "none";
    directions.style.display = "none";
//      questions.forEach(function (item, idx) {
//          console.log(item + "|" + idx);

//          heading.textContent = questions[idx].question;
//          for (i = 0; i < questions[idx].answers.length; i++) {
//              var btn = document.createElement("button");
//              btn.innerHTML = questions[idx].answers[i];
//              document.body.appendChild(btn);


//              button1.textContent = questions[i].answers[0];
//              button2.textContent = questions[i].answers[1];
//              button3.textContent = questions[i].answers[2];
//              button4.textContent = questions[i].answers[3];
//              document.addEventListener("click", function (e) {
//                  if (e.target.innerHTML === questions[i].correctAnswer) {
//                      update2();
//                  } else {
//                      console.log("no");
//                  }
//              })



//          }


//      }
//      )
  }
  )





 function update1() {
   
    // for (i=0; i<questions.length; i++) {
    //     if (i!=0) break;
    //  heading.textContent = questions[i].question;
    //  button1.textContent = questions[i].answers[0];
    //  button2.textContent = questions[i].answers[1];
    //  button3.textContent = questions[i].answers[2];
    //  button4.textContent = questions[i].answers[3];
    //  document.addEventListener("click", function(e) {
    //      if (e.target.innerHTML === questions[i].correctAnswer) {
    //          update2();
    //      }else {
    //          console.log("no");
    //      }
    //  })
    // if (i!=1) break;
    //  heading.textContent = questions[i].question;
    //  button1.textContent = questions[i].answers[0];
    //  button2.textContent = questions[i].answers[1];
    //  button3.textContent = questions[i].answers[2];
    //  button4.textContent = questions[i].answers[3];







    // }
   
   
     heading.textContent = questions[0].question;
     button1.textContent = questions[0].answers[0];
     button2.textContent = questions[0].answers[1];
     button3.textContent = questions[0].answers[2];
     button4.textContent = questions[0].answers[3];
     button3.addEventListener("click", function(e){
        var input = e.target.innerHTML
       
        if (input === questions[0].correctAnswer){
            update2();
        };
       
     }
     );
};


function update2() {
    heading.textContent = questions[1].question;
    button1.textContent = questions[1].answers[0];
    button2.textContent = questions[1].answers[1];
    button3.textContent = questions[1].answers[2];
    button4.textContent = questions[1].answers[3];
    button2.addEventListener("click", function(e){
        var input = e.target.innerHTML
        
        if (input === questions[1].correctAnswer){
            update3();
        };
        
     }
     
     
     );
};
function update3() {
    heading.textContent = questions[2].question;
    button1.textContent = questions[2].answers[0];
    button2.textContent = questions[2].answers[1];
    button3.textContent = questions[2].answers[2];
    button4.textContent = questions[2].answers[3];
    button1.addEventListener("click", function(e){
        var input = e.target.innerHTML
        
        if (input === questions[2].correctAnswer){
            update4();
        };
        
     }
     
     
     );
};
function update4() {
    heading.textContent = questions[3].question;
    button1.textContent = questions[3].answers[0];
    button2.textContent = questions[3].answers[1];
    button3.textContent = questions[3].answers[2];
    button4.textContent = questions[3].answers[3];
    button4.addEventListener("click", function(e){
        var input = e.target.innerHTML
        
        if (input === questions[3].correctAnswer){
            update5();
        };
        
     }
     
     
     );
};
function update5() {
    heading.textContent = questions[4].question;
    button1.textContent = questions[4].answers[0];
    button2.textContent = questions[4].answers[1];
    button3.textContent = questions[4].answers[2];
    button4.textContent = questions[4].answers[3];
    button1.addEventListener("click", function(e){
        var input = e.target.innerHTML
        
        if (input === questions[4].correctAnswer){
            update6();
        };
        
     }
     
     
     );
};
function update6() {
    heading.textContent = questions[5].question;
    button1.textContent = questions[5].answers[0];
    button2.textContent = questions[5].answers[1];
    button3.textContent = questions[5].answers[2];
    button4.textContent = questions[5].answers[3];
    button2.addEventListener("click",function(e){
        var input = e.target.innerHTML
        
        if (input === questions[5].correctAnswer){
            update7();
        };
        
     }
     
     
     );
};
function update7() {
    heading.textContent = questions[6].question;
    button1.textContent = questions[6].answers[0];
    button2.textContent = questions[6].answers[1];
    button3.textContent = questions[6].answers[2];
    button4.textContent = questions[6].answers[3];
    button2.addEventListener("click", function(e){
        var input = e.target.innerHTML
        
        if (input === questions[6].correctAnswer){
            update8();
        };
        
     }
     
     
     );
};
function update8() {
    heading.textContent = questions[7].question;
    button1.textContent = questions[7].answers[0];
    button2.textContent = questions[7].answers[1];
    button3.textContent = questions[7].answers[2];
    button4.textContent = questions[7].answers[3];
    button2.addEventListener("click", function(e){
        var input = e.target.innerHTML
        
        if (input === questions[7].correctAnswer){
            update9();
        };
        
     }
     
     
     );
};
function update9() {
    heading.textContent = questions[8].question;
    button1.textContent = questions[8].answers[0];
    button2.textContent = questions[8].answers[1];
    button3.textContent = questions[8].answers[2];
    button4.textContent = questions[8].answers[3];
    button4.addEventListener("click", function(e){
        var input = e.target.innerHTML
        
        if (input === questions[8].correctAnswer){
            update10();
        };
        
     }
     
     
     );;
};
function update10() {
    heading.textContent = questions[9].question;
    button1.textContent = questions[9].answers[0];
    button2.textContent = questions[9].answers[1];
    button3.textContent = questions[9].answers[2];
    button4.textContent = questions[9].answers[3];
    button1.addEventListener("click", function(e){
        var input = e.target.innerHTML
        
        if (input === questions[9].correctAnswer){
            list.style.display = "none";
            startButton.style.display = "block";
            directions.style.display = "block";
            heading.textContent = "Quiz";
            directions.style.display = "block";
        };
        
     }
     
     
     );
    }