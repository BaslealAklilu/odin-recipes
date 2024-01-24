let compwin = 0
let humwin = 0

const result = document.querySelector('.results')
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection){
        console.log("Go Again!")
    }
    else{
            if ((playerSelection === "rock" && computerSelection === "paper") || (playerSelection === "paper" && computerSelection === "scissor") || (playerSelection === "scissor" && computerSelection === "rock")){
                console.log("Computer Wins")
                compwin = compwin + 1
            }
            else if((playerSelection === "rock" && computerSelection === "scissor") || (playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "scissor" && computerSelection === "paper")){
                console.log("Human Wins")
                humwin = humwin + 1
        }
    }
    return [humwin,compwin]
}

const btns = document.querySelectorAll('button')
btns.forEach(btn => btn.addEventListener('click',(e)=>myFunc(e)))

function myFunc(event){
    const playerSelection = event.target.value
    const computerSelection = getComputerChoice()
    playRound(playerSelection,computerSelection)
    [compwin , humwin ]= playRound()
    
    if(compwin == 3 || humwin == 3){
        if (compwin > humwin){
            result.textContent = "Computer Wins the game!"
        }
        else{
            result.textContent = "Human wins the game"
        }
        compwin = 0
        humwin = 0
    }
}


function getComputerChoice(){
    const choice = ["rock","paper","scissor"]
    compChoice = Math.floor(Math.random() * choice.length)
    return choice[compChoice]
}

// function game(){

//     x = playRound()
//     console.log(x)
//     if (x[0] == x[1]){
//         console.log('It is a Tie!')
//     }
//     else if(x[0] < x[1]){
//         console.log('computer Wins')
//     }
//     else{
//         console.log('Human Wins')
//     }
    

// }

// game()




