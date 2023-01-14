let choicesEl = document.querySelector("#choices");
let questionTitle = document.querySelector("#question-title");
let questions = [{question: "Which nation was the first Asian country to reach the World Cup semi-finals?", answers: ["South Korea", "India", "Japan", "China"], correctAnswer: 0}, 
{question: "Who is the all-time leading World Cup goalscorer?", answers: ["Miroslav Klose", "Cristiano Ronaldo", "Just Fontaine", "Gary Lineker"], correctAnswer: 0}, 
{question: "Which national team had the most completed passes?", answers: ["Belgium", "Argentina", "Brazil", "Cameroon"], correctAnswer: 1}]
let questionScreen = document.querySelector("#questions");
let startScreen = document.querySelector("#start-screen");
let currentQuestion = 0;
let index = 0;




//remove class hide from questions and place it to start screen with setAttribute
document.addEventListener("click", function(){
questionScreen.setAttribute("class", "");
startScreen.setAttribute("class", "hide");
  });

navigate()

//navigate the questions
  function navigate() {
    for (let index = 0; index < questions.length; index++) {
        questionTitle.textContent = questions[index].question;
                
        
    }
    
    // if (index === 2)
    
  }




//call the questions
// questionTitle.textContent = questions[i].question;




// //call the answer buttons
// for (let i = 0; i < 3; i++) {

// let button1 = document.createElement("button");
// button1.innerHTML = questions[i].answers[i];
// choicesEl.appendChild(button1);

// }




// choicesEl.addEventListener("click", function (event) {

// if(event.target.matches("button")){
// event.target.getAttribute("data-index")

// }
    
// })


//basic timer
//let timer = 90;
//let intervalId = setInterval(function(){
//    timer--
//    console.log(timer); here we'll have to print it out
//},1000)

//if we want to stop the interval

//after a wrong answer subtract from the timer
//timer -= 10

//when the user selects the final answer we stop the interval
//clearInterval(intervalId)
//and we display the user score
//timer