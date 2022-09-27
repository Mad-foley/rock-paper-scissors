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

const result = [];
for (let i = 0; i < 5; i++ ) {
  result.push(playRound(playerChoice, getComputerChoice()));
}


console.log(result);