let Fnumber = ''
const Operator = ''
const Snumber = ''
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


const one = document.querySelector('.one')
const output = document.querySelector('.output')
const box = document.querySelectorAll('.box')
console.log(typeof(one))
let number = ''
box.forEach(boxes =>{
    // one.addEventListener('click',(e)=>{
    //    output.textContent = `${e.target.dataset.one}`
    // })

    boxes.addEventListener('click',(e)=>{
        let value = boxes.classList[1]
        console.log(number)
        number = number + e.target.dataset[value]
        console.log(number)
        output.textContent = number
        console.log(e.target.dataset[value])
    })
})