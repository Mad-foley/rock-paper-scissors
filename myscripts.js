let playerChoice = prompt("Rock Paper or Scissors?").toLowerCase();
let choices = ['rock', 'paper','scissors'];

function getComputerChoice() {
  return choices[Math.floor(Math.random()*choices.length)];
}

let computerChoice = getComputerChoice();

function winner (player, computer) {
  if(choices.includes(player)) {
    if(player === computer) {
      return "Tie"
    } else if ((player === 'paper' && computer === 'rock') || (player === 'scissors' && computer === 'paper') || (player === 'rock' && computer === 'scissors')) {
      return "You win!"
    } else {
      return "Computer wins!"
    }
  }
  return "Please input: rock, paper or scissors"
}

console.log(winner(playerChoice, computerChoice))