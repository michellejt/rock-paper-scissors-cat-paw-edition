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

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const openModalBtn = document.querySelector(".btn-open");
const closeModalBtn = document.querySelector(".btn-close");


let userChoiceSelected
let result
let i = 0;

const timeLeft = document.querySelector('#time-left')
let timerId = null
let currentTime = 10

//load initial item
window.addEventListener('DOMContentLoaded', function(){
  addChoose();
});


//const startGame = document.getElementById('start')
const reStartGame = document.getElementById('restart')


reStartGame.addEventListener("click", pressStart, false);

function pressStart() {
  choose.addEventListener("click", addChoose, false);
  
  var timer = 10;
  var gameCountdown = setInterval(function(){
    //console.log(timer);
    timer--
    timeLeft.innerHTML = timer +   "&nbsp"+"seconds remaining";
    generateComputerChoice()
    if (timer === 0) {
      timeLeft.innerHTML = "";
      //generateComputerChoice();
      getResult();
      choose.removeEventListener("click", addChoose, false);     
      clearInterval(gameCountdown);
    }
  }, 1000);
};

//trying to start the game with default option
//addChoose()
//generateComputerChoice()
function addChoose() {
    if ( i < choices.length - 1) { 
        i++; 
    } else 
      { 
        i = 0;
      } 
    userChoiceSelected = choices[i][0]; 
    var userChoiceSelectedImage = choices[i][1] 
    userChoiceImage = "<img src='images/" + userChoiceSelectedImage + "'>";
    userChoiceDisplay.innerHTML = "You choose " + userChoiceSelected;
    userChoiceDisplayImage.innerHTML =  userChoiceImage
    console.log("i chose ", userChoiceSelected)
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
   // console.log("computer choice is " + computerChoice)
    computerChoiceDisplay.innerHTML = "Computer chose " + computerChoice
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
    if (computerChoice === 'scissors' && userChoiceSelected === "paper") {
        result = 'you lose!'
      }
      openModal()
  }


// close modal function
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

// close the modal when the close button and overlay is clicked
closeModalBtn.addEventListener("click", closeModal);
//overlay.addEventListener("click", closeModal);

/* // close modal when the Esc key is pressed
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
}); */

// open modal function
const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
  resultDisplay.innerHTML = result   
};



