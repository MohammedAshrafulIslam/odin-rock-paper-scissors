function getComputerChoice(){

  const options = ["rock", "paper", "scissors"];
  let randomIndex = Math.floor((Math.random()*options.length)); //returns a random index within the length of options array. Used Math.floor to round the fractional number down to nearest integer, ensuring it fits within valid index range.

  let computerOption = options[randomIndex];
  console.log("Computer's choice: " + computerOption);
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



function playRound(computerChoice, humanChoice ){

 if(computerChoice === humanChoice){
  console.log("it's a draw! play again ");
  getNewHumanChoice(computerChoice);
  return;

 }
 else if( computerChoice === "rock" && humanChoice ==="paper" ){
  console.log("You win, paper beats rock!");
 }
 else if(  computerChoice === "paper" && humanChoice === "rock" ){
  console.log("You lose, paper beats rock");
 }
 else if( computerChoice === "paper" && humanChoice === "scissor" ){
  console.log("You win, scissors cuts paper");
 }
 else if( computerChoice === "scissors" && humanChoice === "paper"  ){
  console.log("You lose, scissors cuts paper");
 }
 else if( computerChoice === "scissors" && humanChoice === "rock"  ){
  console.log("You win, rock beats scissors");
 }
 else if( computerChoice === "rock" && humanChoice === "scissor" ){
  console.log("You lose, rock beats scissors");
 }
 else{
  console.log("Invalid choice, please pick again");
  getNewHumanChoice(computerChoice);
 }

}

let humanScore = 0;
let computerScore = 0;

let computerSelection = getComputerChoice();
let humanSelection = getHumanChoice();

playRound(computerSelection, humanSelection);





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






