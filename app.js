const choose = document.querySelector('#choice-button')
const userChoiceDisplayImage = document.querySelector('#user-choice-image')
const userChoiceDisplay = document.querySelector('#user-choice') 
const choices = [
    ["rock", "rock.png"],
    ["paper", "paper.png"],
    ["scissors", "scissors.png"] 
] 
const computerChoiceDisplay = document.getElementById('computer-choice')
const computerChoiceDisplayImage = document.getElementById('computer-choice-image')
const resultDisplay = document.getElementById('result')
let userChoiceSelected 
let result
let i = 0;

const timeLeft = document.querySelector('#time-left')
let timerId = null
let currentTime = 10


const startGame = document.getElementById('start')
const reStartGame = document.getElementById('restart')

reStartGame.addEventListener('click', () => {  
  pressStart()
})  


start.addEventListener("click", pressStart, false);

function pressStart() {
  choose.addEventListener("click", addChoose, false);
  var timer = 10;
  var newYearCountdown = setInterval(function(){
    timeLeft.innerHTML = timer +   "&nbsp"+"seconds remaining";
    console.log(timer);
    timer--
    if (timer === 0) {
      generateComputerChoice();
      getResult();
      choose.removeEventListener("click", addChoose, false);
      clearInterval(newYearCountdown);
    }
  }, 1000);
};

choose.addEventListener("click", addChoose, false);

function addChoose() {
    if ( i < choices.length - 1) { i++; } else { i = 0;} 
    userChoiceSelected = choices[i][0]; 
    userChoiceSelectedImage = choices[i][1] 
    var userChoiceImage = "<img src='images/" + userChoiceSelectedImage + "'>";
    console.log('you chose ' + userChoiceSelected);
    userChoiceDisplay.innerHTML = "You choose " + userChoiceSelected;
    userChoiceDisplayImage.innerHTML =  userChoiceImage
}



   function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1
    var repImage = '<img src="images/'; 
    if (randomNumber === 1) {
      computerChoice = 'rock'
      repImage += 'rock.png">'; 
    }
    if (randomNumber === 2) {
      computerChoice = 'scissors'
      repImage += 'scissors.png">'; 
    }
    if (randomNumber === 3) {
      computerChoice = 'paper'
      repImage += 'paper.png">'; 
    }
    console.log("computer choice is " + computerChoice)
    computerChoiceDisplayImage.innerHTML = repImage;
    computerChoiceDisplay.innerHTML = "Computer chose " + computerChoice
  }
  
  function getResult() {
    if (computerChoice === userChoiceSelected) {
      result = 'its a draw!'
    }
    if (computerChoice === 'rock' && userChoiceSelected === "paper") {
      result = 'you win!'
    }
    if (computerChoice === 'rock' && userChoiceSelected === "scissors") {
      result = 'you lost!'
    }
    if (computerChoice === 'paper' && userChoiceSelected === "scissors") {
      result = 'you win!'
    }
    if (computerChoice === 'paper' && userChoiceSelected === "rock") {
      result = 'you lose!'
    }
    if (computerChoice === 'scissors' && userChoiceSelected === "rock") {
      result = 'you win!'
    }
    if (computerChoice === 'scissors' && userChoiceSelected === "paper") {
      result = 'you lose!'
    }
    if (computerChoice === 'scissors' && userChoiceSelected === "paper") {
        result = 'you lose!'
      }
    resultDisplay.innerHTML = result   
  }
 
/*   function countDown() {
    currentTime--
    timeLeft.textContent = currentTime
    if (currentTime == 0) {
        clearInterval(countDownTimerId)
        clearInterval(timerId)
        generateComputerChoice();
        getResult();
        choose.remove();
        choose.removeEventListener("click", addChoose, false);
        console.log('game over')
    }
}

let countDownTimerId = setInterval(countDown, 1000) */

/* function restart() {
  choose.addEventListener("click", addChoose, false);
} */


