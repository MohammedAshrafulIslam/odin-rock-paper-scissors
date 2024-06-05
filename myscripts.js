function getComputerChoice(){

  const options = ["rock", "paper", "scissors"];
  let randomIndex = Math.floor((Math.random()*options.length)); //returns a random index within the length of options array. Used Math.floor to round the fractional number down to nearest integer, ensuring it fits within valid index range.

  let computerOption = options[randomIndex];
  
  return computerOption;
  }

function getHumanChoice(){
  let response = prompt("Rock, Paper or Scissor?");
  console.log("First human choice: "+ response);
  return response.toLowerCase();

}

function getNewHumanChoice(computerChoice){
 let newHumanChoice = getHumanChoice();
 
 console.log(`New Human Choice: ${newHumanChoice} and Computer Choice: ${computerChoice}`);
 return playRound(computerChoice, newHumanChoice);
}

let humanScore = 0;
let computerScore = 0;



function playRound(computerChoice, humanChoice ){

 if(computerChoice === humanChoice){
  console.log("it's a draw! play again ");
  getNewHumanChoice(computerChoice);
  return;

 }
 else if( computerChoice === "rock" && humanChoice ==="paper" ){
  console.log(`Computer's choice ${computerChoice} and Human's Choice ${humanChoice}`);
  console.log("You win, paper beats rock!");
  humanScore++;
 }
 else if(  computerChoice === "paper" && humanChoice === "rock" ){
  console.log(`Computer's choice ${computerChoice} and Human's Choice ${humanChoice}`);
  console.log("You lose, paper beats rock");
  computerScore++;
 }
 else if( computerChoice === "paper" && humanChoice === "scissor" ){
  console.log(`Computer's choice ${computerChoice} and Human's Choice ${humanChoice}`);
  console.log("You win, scissors cuts paper");
  humanScore++;
 }
 else if( computerChoice === "scissors" && humanChoice === "paper"  ){
  console.log(`Computer's choice ${computerChoice} and Human's Choice ${humanChoice}`);
  console.log("You lose, scissors cuts paper");
  computerScore++;
 }
 else if( computerChoice === "scissors" && humanChoice === "rock"  ){
  console.log(`Computer's choice ${computerChoice} and Human's Choice ${humanChoice}`);
  console.log("You win, rock beats scissors");
  humanScore++;
 }
 else if( computerChoice === "rock" && humanChoice === "scissor" ){
  console.log(`Computer's choice ${computerChoice} and Human's Choice ${humanChoice}`);
  console.log("You lose, rock beats scissors");
  computerScore++;
 }
 else{
  console.log("Invalid choice, please pick again");
  getNewHumanChoice(computerChoice);
 }

}





function playGame() {

//Playing 5 rounds.
playRound(getComputerChoice(), getHumanChoice());
playRound(getComputerChoice(), getHumanChoice());
playRound(getComputerChoice(), getHumanChoice());
playRound(getComputerChoice(), getHumanChoice());
playRound(getComputerChoice(), getHumanChoice());

}

function winnerDecision(){
 if( humanScore < computerScore){
  console.log ("Computer Won!!");
 }
 else{
  console.log( "You won!!" );
 }
}

playGame();
console.log(`Computer score: ${computerScore}  Human Score: ${humanScore}`);
winnerDecision();




/*
//To be deleted wrote them just for testing.

const options = ["rock", "paper", "scissors"];

let randomIndex = Math.floor((Math.random()*options.length)); //returns a random index within the length of options array. Used Math.floor to round the fractional number down to nearest integer, ensuring it fits within valid index range.

let computerOption = options[randomIndex];


console.log(randomIndex);
console.log(computerOption);

let response = prompt("Rock, Paper or Scissor?");

console.log(response.toLowerCase());
*/






