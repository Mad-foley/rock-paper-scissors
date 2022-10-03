const buttons = document.querySelectorAll('button');
const choices = ['rock', 'paper', 'scissors'];
const results = document.querySelector('#result');
const playerScore = document.createElement('div');
const computerScore = document.createElement('div');
const result = document.createElement('div');
const score = {player: 0 , computer: 0};

//get a random r-p-s choice from computer
function getComputerChoice() {
  return choices[Math.floor(Math.random()*choices.length)];
}

//when player makes button selection
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    //invoke a game and save result
    let output = playRound(button.id, getComputerChoice());
    //if score for either player or computer is 5 announce winner with an alert
    if(score['player'] === 5) {
      alert('You Won!');
    } else if (score['computer'] === 5) {
      alert('You Lost!');
    } 
    //update player and computer score as well as the current result
    playerScore.textContent = `You: ${score['player']}`;
    computerScore.textContent = `Computer: ${score['computer']}`;
    result.textContent = output + '!';
    results.setAttribute('style', 'font-size: 20px; text-align: center;');
    //change color of background based on result answer
    if(output === 'Loser') {
       result.setAttribute('style', 'background-color: pink;')
    } else if(output === 'Tie') {
      result.setAttribute('style', 'background-color: lightblue;');
    } else {
      result.setAttribute('style','background-color: lightgreen;');
    }
    //append the changes
    results.appendChild(result);
    results.appendChild(playerScore);
    results.appendChild(computerScore);
    });
  });

//plays a round of r-p-s and returns result
//stores points to score object
function playRound (player, computer) {
  if(player === computer) {
    return "Tie"
  } else if ((player === 'paper' && computer === 'rock') || (player === 'scissors' && computer === 'paper') || (player === 'rock' && computer === 'scissors')) {
    score['player'] += 1;
    return "Winner"
  } else {
    score['computer'] += 1;
    return "Loser"
  }
}