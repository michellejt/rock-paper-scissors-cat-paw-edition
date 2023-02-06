const choose = document.querySelector('#choice-button')
const userChoiceDisplayImage = document.querySelector('#user-choice-image')
const userChoiceDisplay = document.querySelector('#user-choice') 
const choices = [
    ["rock", "rock.png"],
    ["paper", "paper.png"],
    ["scissors", "scissors.png"] 
] 
const playComputerChoice = document.getElementById('computer-choice')
const computerChoiceDisplay = document.getElementById('computer-choice-display')
const computerChoiceDisplayImage = document.getElementById('computer-choice-display')
const resultDisplay = document.getElementById('result')
let userChoiceSelected 
let result
let i = 0;

choose.addEventListener('click', e => {
  if ( i < choices.length - 1) { i++; } else { i = 0;} 
    userChoiceSelected = choices[i][0]; 
    userChoiceSelectedImage = choices[i][1] 
    var userChoiceImage = "<img src='images/" + userChoiceSelectedImage + "'>";
    console.log(userChoiceSelected);
    userChoiceDisplayImage.innerHTML =  userChoiceImage
    userChoiceDisplay.innerHTML = userChoiceSelected;
}) 

  playComputerChoice.addEventListener('click', (e) => {
     generateComputerChoice()
     getResult()
   })

   
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
    console.log("computer choice is" + computerChoice)
    computerChoiceDisplay.innerHTML = computerChoice
    computerChoiceDisplayImage.innerHTML = repImage;
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
