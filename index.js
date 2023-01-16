let choicesEl = document.querySelector("#choices");
let questionsEl = document.querySelector("#questions");
let questionTitle = document.querySelector("#question-title");
let questions = [{question: "Which nation was the first Asian country to reach the World Cup semi-finals?", answers: ["South Korea", "India", "Japan", "China"], correctAnswer: "South Korea"}, 
{question: "Who is the all-time leading World Cup goalscorer?", answers: ["Miroslav Klose", "Cristiano Ronaldo", "Just Fontaine", "Gary Lineker"], correctAnswer: 0}, 
{question: "Which national team had the most completed passes?", answers: ["Belgium", "Argentina", "Brazil", "Cameroon"], correctAnswer: 1}]
let questionScreen = document.querySelector("#questions");
let startScreen = document.querySelector("#start-screen");
let btn = document.querySelector("button");
let currentQuestion = 0;
let index = 0;



//remove class hide from questions and place it to start screen with setAttribute
btn.addEventListener("click", function(){
questionScreen.setAttribute("class", "");
startScreen.setAttribute("class", "hide");
  });

// function questionChange() {
//   index = index +1;
//   currentQuestion = index;
// }

navigate();

//navigate the questions
function navigate() {

  currentQuestion = questions[index];
  
  questionTitle.textContent = questions[index].question;
  for (let i = 0; i < 4; i++) {
    let button0 = document.createElement("button");
    button0.innerHTML = questions[index].answers[i];
    choicesEl.appendChild(button0);
    
  }

  let btnClicked = document.querySelector('#questions')
  btnClicked.addEventListener("click", (event) => {
    if(event.target.tagName === 'BUTTON') {
      console.log(event.target.innerText);
    }
    if(event.target.innerText === questions[index].correctAnswer){
      let correct = document.createElement("h2");
      correct.textContent = "Correct Answer!";
      questionsEl.appendChild(correct);
    }else{
      let wrong = document.createElement("h2");
      wrong.textContent = "Wrong Answer!";
      questionsEl.appendChild(wrong);
    }
    currentQuestion ++ ;
    index ++ ;
  navigate();
    })
    
  }
  // questionChange()
  






  // choicesEl.addEventListener("click", function (event) {
  // if(event.target.matches("button")){
  // console.log(event.target.getAttribute("index"))}
  // })







// let button1 = document.createElement("button");
// button1.innerHTML = questions[index].answers[1];
// choicesEl.appendChild(button1);

// if (index === 2)
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