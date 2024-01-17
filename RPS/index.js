// It's Really messy but it works!
let compwin = 0
let humwin = 0

function declare(val){
    if (val[0] === val[1]){
        console.log("It's a tie")
    }
    else if(val[0] > val[1]){
        console.log("It's the Humans this time!")
    }
    else{
        console.log("It's the Computers this time!")
    }
}
function compute(x,y){
    if (x === y){
        alert("Go again!")
    }
    else{
        if ((x === 0 && y === 1) || (x === 1 && y === 2) || (x === 2 && y === 0)){
            alert("Computer Wins")
            compwin = compwin + 1
        }
        else if((x === 0 && y === 2) || (x === 1 && y === 0) || (x === 2 && y === 1)){
            alert("Human Wins")
            humwin = humwin + 1
        }
    }
    return [compwin,humwin]
}

for (i =0; i <= 5;i++){
    my = parseInt(prompt("Enter Rock, Paper of Scissors?"))
    comp = Math.floor(Math.random() * 3)
    console.log(compute(my,comp))
}

declare(compute)