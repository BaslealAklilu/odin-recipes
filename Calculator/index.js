let Fnumber = ''
const Operator = ''
const Snumber = ''
const arr = []
function typeConverter(...theArgs){
    for(let i =0; i < theArgs.length; i++){
        arr.push(theArgs[i])
    }
    console.log(arr)
    console.log(`from typeConverter`)
}
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
        typeConverter(Fnumber,Snumber)
    }
    else if(Operator === '-'){
        typeConverter(Fnumber,Snumber)
    }
    else if (Operator === '*'){
        typeConverter(Fnumber,Snumber)
    }
    else if (Operator === '/'){
        typeConverter(Fnumber,Snumber)
    }
}


const one = document.querySelector('.one')
const output = document.querySelector('.output')
const nums = document.querySelectorAll('.nums')
const operator = document.querySelectorAll('.operator')
const equal = document.querySelector('.equal')
console.log(typeof(one))
let number = ''
nums.forEach(num =>{
    // one.addEventListener('click',(e)=>{
    //    output.textContent = `${e.target.dataset.one}`
    // })

    num.addEventListener('click',(e)=>{
        let value = num.classList[2]
        console.log(number)
        number = number + e.target.dataset[value]
        console.log(number)
        output.textContent = number
        console.log(e.target.dataset[value])
    })
})

operator.forEach(oper =>{
    oper.addEventListener('click',(e)=>{
        let value = oper.classList[2]
        typeConverter(number,e.target.dataset[value])
        output.textContent = ''
        number = ''
    })
})

equal.addEventListener('click',(e)=>{
    equal.style.display = 'None';
    console.log(arr)
})
