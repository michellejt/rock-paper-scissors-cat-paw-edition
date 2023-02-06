const choose = document.querySelector('#choice-button')
const userChoiceDisplayImage = document.querySelector('#user-choice-image')
const userChoiceDisplay = document.querySelector('#user-choice') 
const userChoice = [
    ["rock", "rock.png"],
    ["paper", "paper.png"],
    ["scissors", "scissors.png"] 
] 
const computerChoice = document.querySelector('#computer-choice')
const computerChoiceDisplay = document.getElementById('computer-choice')

 let i = 0;
 choose.addEventListener('click', e => {

  if ( i < userChoice.length - 1) { i++; } else { i = 0;} 
    var userChoiceImage = "<img src='images/" + userChoice[i][1] + "'>"; 
    console.log("my choice is " + userChoice[i][0]);
    console.log(userChoiceImage, e)
    //userChoiceDisplayImage.innerHTML = userChoiceImage;
    userChoiceDisplayImage.innerHTML =  userChoiceImage
    //userChoiceDisplay.innerHTML = userChoice[i];
    //console.log(userChoice[i])
}) 

computerChoice.addEventListener('click', e => { 
  /* Create a variable that will hold  the text and when inserted into HTML document it will be rendered as an HTML img element */
 var repImage = '<img src="'; 
 const randomNumber = Math.floor(Math.random() * 3) +1
 console.log(randomNumber)
 if (randomNumber === 1){
     userChoice ="rock"
     repImage += 'rock.png">'; 
 }
 if (randomNumber === 2){
     userChoice ="scissors"
     repImage += 'scissors.png">'; 
 }
 if (randomNumber === 3){
     userChoice ="paper"
     repImage += 'paper.png">'; 
 }
 userChoiceDisplayImage.innerHTML = repImage;
 userChoiceDisplay.innerHTML = userChoice;
})
