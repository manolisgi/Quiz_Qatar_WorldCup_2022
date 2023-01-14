let chicesEl = document.querySelector("#choices");
let questions = [{question: "Which nation was the first Asian country to reach the World Cup semi-finals?", answers: ["South Korea", "India", "Japan", "China"], correctAnswer: 0}, 
{question: "Who is the all-time leading World Cup goalscorer?", answers: ["Miroslav Klose", "Cristiano Ronaldo", "Just Fontaine", "Gary Lineker"], correctAnswer: 0}, 
{question: "Which national team had the most completed passes?", answers: ["Belgium", "Argentina", "Brazil", "Cameroon"], correctAnswer: 1}



]


let currentQuestion = 0;

choicesEl.addEventListener("click", function (event) {

if(event.target.matches("button")){
event.target.getAttribute("data-index")

}
    
})


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