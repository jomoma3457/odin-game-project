function getComputerChoice() {
    const randomNumb = Math.floor(Math.random() * 3);
    switch (randomNumb) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
        default:
            break;
    }
}

function playRound(playerPlay, compPlay) {
    if (playerPlay === 'rock') {
        if (compPlay === 'paper') {
            return "You Lose! Paper beats Rock"
        }
    };
    
    if (playerPlay === 'paper') {
        if (compPlay === 'scissors') {
            return "You Lose! Scissors beats Paper"
        }
    };
}

const playerPlay = "rock";
const compPlay = getComputerChoice();
console.log(playRound(playerPlay, compPlay));