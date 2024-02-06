let Fnumber = ''
const Operator = ''
const Snumber = ''
let arr = []
function typeConverter(...theArgs){
    for(let i =0; i < theArgs.length; i++){
        arr.push(theArgs[i])
    }
    console.log(arr)
    console.log(`from typeConverter`)
}
function add(a,b){
    if(a === '' || b === ' ' ){
        return 0
    }
    else if(a === ''){
        return b
    }
    else if(b === ''){
        return a
    }
    else{
        return (a + b)
    }
}

function subtract(a,b){
    if(a === '' || b === '' ){
        return 0
    }
    else if(a === ''){
        return -b
    }
    else if(b === ''){
        return -a
    }
    else{
        return (a - b)
    }
}

function multiply(a,b){
    if(a === '' || b === ' ' ){
        return 0
    }
    else if(a === ''){
        return 0
    }
    else if(b === ''){
        return 0
    }
    else{
        return (a * b)
    }
}

function divide(a,b){
    if(a === '' || b === ' ' ){
        return 0
    }
    else if(a === ''){
        return 0
    }
    else if(b === ''){
        return 0
    }
    else{
        return (a / b)
    }
}

function operate(arr){
    // if (Operator === '+'){
    //     typeConverter(Fnumber,Snumber)
    // }
    // else if(Operator === '-'){
    //     typeConverter(Fnumber,Snumber)
    // }
    // else if (Operator === '*'){
    //     typeConverter(Fnumber,Snumber)
    // }
    // else if (Operator === '/'){
    //     typeConverter(Fnumber,Snumber)
    // }
    let temp = parseInt(arr[0])
    for(let i = 0; i< arr.length + 1; i++){
            if(arr[i] === '+'){
                temp = add(+temp,+arr[i + 1])
            }
            else if(arr[i] === '-'){
                temp = subtract(+temp,+arr[i + 1])
            }
            else if(arr[i] === '*'){
                temp = multiply(+temp,+arr[i + 1])
            }
            else if(arr[i] === '/'){
                temp = divide(+temp,+arr[i + 1])
            }
            else{
                continue
            }
        }
        output.textContent = temp
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
    // equal.style.cssText = 'display:None';
    operate(arr)
    arr = []
})
