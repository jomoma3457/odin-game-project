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
    if (playerPlay === 'rock' && compPlay === 'paper') {
        computerScore +=1;
        return "You Lose! Paper beats Rock."
    };
};

let playerPlay = 'rock';
const compPlay = getComputerChoice();
console.log(playRound(playerPlay, compPlay));

let playerScore = parseInt(0);
let computerScore = parseInt(0);
function game() {

}