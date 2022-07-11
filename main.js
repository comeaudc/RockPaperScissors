const choices = ['rock', 'paper', 'scissors']

function computerPlay() {
    let fate = Math.floor(Math.random() * 3)
    return choices[fate]
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()
    if (playerSelection  == computerSelection) {
        return `You Tie!`
    }
    else {
        switch(playerSelection) {
            case 'rock':
                if (computerSelection == 'scissors') {
                    return `You Win!`       // Rock beats Scissors
                }
                else {
                    return `You Lose! Paper beats Rock`
                }
            case 'paper':
                if (computerSelection == 'rock') {
                    return `You Win!`       //Paper beats Rock
                }
                else {
                    return `You Lose! Scissors beats Paper`
                }
            case 'scissors':
                if (computerSelection == 'paper') {
                    return `You Win!`        //Scissors beats Paper
                }
                else {
                    return `You Lose! Rock beats Scissors`
                }
        }
    }
}

function gameDecision (yourScore, cpuScore) {
    if (yourScore == cpuScore) {
        return `It was a tie. You both won ${yourScore} times`
    }
    else if (yourScore > cpuScore) {
        return `Congratulations!! You beat the CPU: ${yourScore} to ${cpuScore}`
    }
    else {
        return `Better luck next time. You were beat by a computer`
    }
}

function game(playerSelection, computerSelection) {
    let yourScore = 0;
    let cpuScore = 0;
    let tie = 0;

    for (let i = 0; i < 5; i++) {
        let playerSelection = window.prompt('Rock, Paper, or Scissors?')
        let computerSelection = computerPlay()
        let winner = playRound(playerSelection, computerSelection)
        
        if (winner == `You Win!`) {
            yourScore =+ 1
            console.log(`You Win! ${playerSelection} beats ${computerSelection}`)
        }
        else if (winner == `You Tie!`) {
            console.log(`You tied!`)
            tie =+ 1
        }
        else {
            cpuScore =+ 1
            console.log(`You Lose! ${computerSelection} beats ${playerSelection}`)
        }
    }
    return(gameDecision(yourScore, cpuScore))
}

console.log(game())