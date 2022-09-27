let playerChoice = prompt("Rock Paper or Scissors?").toLowerCase();
let choices = ['rock', 'paper','scissors'];

function getComputerChoice() {
  return choices[Math.floor(Math.random()*choices.length)];
}

function playRound (player, computer) {
  if(choices.includes(player)) {
    if(player === computer) {
      return "Tie"
    } else if ((player === 'paper' && computer === 'rock') || (player === 'scissors' && computer === 'paper') || (player === 'rock' && computer === 'scissors')) {
      return "Winner"
    } else {
      return "Loser"
    }
  }
  return "Please input: rock, paper or scissors"
}

function game() {
  for (let i = 1; i < 6; i++ ) {
    console.log(`Round ${i}: `+ playRound(playerChoice, getComputerChoice()));
  }
}

game();