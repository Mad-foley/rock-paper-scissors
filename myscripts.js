let playerChoice = prompt("Rock Paper or Scissors?").toLowerCase();
let choices = ['rock', 'paper','scissors'];

function getComputerChoice() {
  return choices[Math.floor(Math.random()*choices.length)];
}

let computerChoice = getComputerChoice();
//console.log(computerChoice(playerChoice, computerChoice))