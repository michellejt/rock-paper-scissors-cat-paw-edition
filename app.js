const choose = document.querySelector('#choice-button')
const userChoiceDisplayImage = document.querySelector('#user-choice-image')
const userChoiceDisplay = document.querySelector('#user-choice') 
const userChoice = [
    ["rock", "rock.png"],
    ["paper", "paper.png"],
    ["scissors", "scissors.png"] 
] 
const playComputerChoice = document.getElementById('computer-choice')
const computerChoiceDisplay = document.getElementById('computer-choice-display')
const resultDisplay = document.getElementById('result')
let userChoiceSelected 
let result
let i = 0;

choose.addEventListener('click', e => {

  if ( i < userChoice.length - 1) { i++; } else { i = 0;} 
    var userChoiceImage = "<img src='images/" + userChoice[i][1] + "'>";
    userChoiceSelected = userChoice[i][0]; 
    console.log(userChoiceSelected);
    //console.log(userChoiceImage, e)
    userChoiceDisplayImage.innerHTML =  userChoiceImage
    userChoiceDisplay.innerHTML = userChoiceSelected;
}) 

  playComputerChoice.addEventListener('click', (e) => {
    // userChoice = e.target.id
    // userChoiceDisplay.innerHTML = userChoice
     generateComputerChoice()
     getResult()
   })
   
   function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1
    
    if (randomNumber === 1) {
      computerChoice = 'rock'
    }
    if (randomNumber === 2) {
      computerChoice = 'scissors'
    }
    if (randomNumber === 3) {
      computerChoice = 'paper'
    }
    console.log("computer choice" + computerChoice)
    computerChoiceDisplay.innerHTML = computerChoice
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
    resultDisplay.innerHTML = result
  }
