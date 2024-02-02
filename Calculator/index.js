Fnumber = 0
Operator = ''
Snumber = 0
function add(a,b){
    console.log(a + b)
}

function subtract(a,b){
    console.log(a-b)
}

function multiply(a,b){
    console.log(a*b)
}

function divide(a,b){
    console.log(a/b)
}

function operate(Fnumber,Operator,Snumber){
    if (Operator === '+'){
        add(Fnumber,Snumber)
    }
    else if(Operator === '-'){
        subtract(Fnumber,Snumber)
    }
    else if (Operator === '*'){
        multiply(Fnumber,Snumber)
    }
    else if (Operator === '/'){
        divide(Fnumber,Snumber)
    }
}