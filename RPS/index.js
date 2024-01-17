// // It's Really messy but it works!
// // It's best out of 5 and statically done!



// function compute(x,y){
//     if (x === y){
//         alert("Go again!")
//     }
//     else{
//         if ((x === 0 && y === 1) || (x === 1 && y === 2) || (x === 2 && y === 0)){
//             alert("Computer Wins")
//             compwin = compwin + 1
//         }
//         else if((x === 0 && y === 2) || (x === 1 && y === 0) || (x === 2 && y === 1)){
//             alert("Human Wins")
//             humwin = humwin + 1
//         }
//     }
//     return [compwin,humwin]
// }

// for (i =0; i <= 5;i++){
//     my = parseInt(prompt("Enter Rock, Paper of Scissors?"))
//     comp = Math.floor(Math.random() * 3)
//     console.log(compute(my,comp))
// }

// declare(compute)

// let compwin = 0
// let humwin = 0
// function declare(val){
//     if (val[0] === val[1]){
//         console.log("It's a tie")
//     }
//     else if(val[0] > val[1]){
//         console.log("It's the Humans this time!")
//     }
//     else{
//         console.log("It's the Computers this time!")
//     }
// }

let compwin = 0
let humwin = 0

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
   
//   const playerSelection = "rock";
//   const computerSelection = getComputerChoice();
//   console.log(playRound(playerSelection, computerSelection));


const choice = ["rock","paper","scissor"]
function getComputerChoice(){
    compChoice = Math.floor(Math.random() * choice.length)
    return choice[compChoice]
}

function playerSelection(){
    humChoice = prompt("Enter 'rock','paper',or 'scissor'")
    if (!choice.includes(humChoice)){
        console.log("Please Enter the specified words!")
        playerSelection()
    }
    return humChoice
}
console.log(playerSelection() ,getComputerChoice())




function game(){
    for(i = 0 ; i < 5 ; i++){
        playRound(playerSelection(),getComputerChoice())
    }
    x = playRound()
    if (x[0] === x [1]){
        console.log("It's a tie")
    }
    else{
        if(x[0] > x[1]){
            console.log("Humane wins!")
        }
        else{
            console.log("Computer wins")
        }
    }
}

game()




