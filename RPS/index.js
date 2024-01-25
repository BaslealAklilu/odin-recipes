// // // It's Really messy but it works!
// // // It's best out of 5 and statically done!



// // function compute(x,y){
// //     if (x === y){
// //         alert("Go again!")
// //     }
// //     else{
// //         if ((x === 0 && y === 1) || (x === 1 && y === 2) || (x === 2 && y === 0)){
// //             alert("Computer Wins")
// //             compwin = compwin + 1
// //         }
// //         else if((x === 0 && y === 2) || (x === 1 && y === 0) || (x === 2 && y === 1)){
// //             alert("Human Wins")
// //             humwin = humwin + 1
// //         }
// //     }
// //     return [compwin,humwin]
// // }

// // for (i =0; i <= 5;i++){
// //     my = parseInt(prompt("Enter Rock, Paper of Scissors?"))
// //     comp = Math.floor(Math.random() * 3)
// //     console.log(compute(my,comp))
// // }

// // declare(compute)

// // let compwin = 0
// // let humwin = 0
// // function declare(val){
// //     if (val[0] === val[1]){
// //         console.log("It's a tie")
// //     }
// //     else if(val[0] > val[1]){
// //         console.log("It's the Humans this time!")
// //     }
// //     else{
// //         console.log("It's the Computers this time!")
// //     }
// // }

// let compwin = 0
// let humwin = 0


// const choice = ["rock","paper","scissor"]


// rock = document.querySelector('.r')
// paper = document.querySelector('.p')
// scissor = document.querySelector('.s')
// result = document.querySelector('.results')

// function getComputerChoice(){
//     compChoice = Math.floor(Math.random() * choice.length)
//     return choice[compChoice]
// }

// function playRound(playerSelection, computerSelection) {
//     if (playerSelection === computerSelection){
//         console.log('Go Again!')
//     }
//     else{
//             if ((playerSelection === "rock" && computerSelection === "paper") || (playerSelection === "paper" && computerSelection === "scissor") || (playerSelection === "scissor" && computerSelection === "rock")){
//                 console.log("Computer Wins")
//                 compwin = compwin + 1
//                 console.log(compwin)
//             }
//             else if((playerSelection === "rock" && computerSelection === "scissor") || (playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "scissor" && computerSelection === "paper")){
//                 console.log("Human Wins")
//                 humwin = humwin + 1
//                 console.log(humwin)
//         }
//     }
    
//     return [humwin,compwin]
// }

// function playerSelection(){
//     rock.addEventListener('click',(e)=>{
//         playerSelection =  e.target.value
//         computerSelection = getComputerChoice()
//         playRound(playerSelection,computerSelection)
//     })
    
//     paper.addEventListener('click',(e)=>{
//         playerSelection =  e.target.value
//         computerSelection = getComputerChoice()
//         playRound(playerSelection,computerSelection)
//     })
    
//     scissor.addEventListener('click',(e)=>{
//         playerSelection =  e.target.value
//         computerSelection = getComputerChoice()
//         playRound(playerSelection,computerSelection)
//     })
   
// }

// // function game(){

// // }
// console.log(humwin,compwin)
// //   const playerSelection = "rock";
// //   const computerSelection = getComputerChoice();
// //   console.log(playRound(playerSelection, computerSelection));
// game()



// // function game(){
// //     x = playRound(playerSelection(),getComputerChoice())
// //     console.log(x)
// //     if (x[0] === x [1]){
// //         console.log("It's a tie")
// //     }
// //     else{
// //         if(x[0] > x[1]){
// //             console.log("Humane wins!")
// //         }
// //         else{
// //             console.log("Computer wins")
// //         }
// //     }
// // }



// // game()

const rock = document.querySelector('.r')
const paper = document.querySelector('.p')
const scissor = document.querySelector('.s')


function getComputerChoice(){
    choice = ["rock","paper",'scissor']
    random = Math.floor(Math.random() * choice.length)
    return choice[random]
}

function game(){
    rock.addEventListener('click',(e)=>{
        playRound(e.target.value ,getComputerChoice)
    })

    paper.addEventListener('click',(e)=>{
        playRound(e.target.value ,getComputerChoice)
    })

    scissor.addEventListener('click',(e)=>{
        playRound(e.target.value ,getComputerChoice)
    })
}

let humwin = 0
let compwin = 0
function playRound(playerSelection,computerSelection){
    if (playerSelection === computerSelection){
            console.log('Go Again!')
        }
        else{
                if ((playerSelection === "rock" && computerSelection === "paper") || (playerSelection === "paper" && computerSelection === "scissor") || (playerSelection === "scissor" && computerSelection === "rock")){
                    console.log("Computer Wins")
                    compwin = compwin + 1
                    console.log(compwin)
                }
                else if((playerSelection === "rock" && computerSelection === "scissor") || (playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "scissor" && computerSelection === "paper")){
                    console.log("Human Wins")
                    humwin = humwin + 1
                    console.log(humwin)
            }
        }
        
        return [humwin,compwin]
}






