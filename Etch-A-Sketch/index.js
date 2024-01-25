const container = document.querySelector('.container')
const btn = document.createElement('button')
btn.setAttribute('class','btn')
const row = document.querySelector('.row')

row.insertBefore(btn,container)
row.style.cssText ='display:flex; gap:10px; flex-direction:column; padding:10px;'
btn.style.cssText = 'display:flex; align-items:center; justify-content:center; width:300px; height:50px; border-radius:10px; background-color:blue; margin:0 auto; border:none;'
btn.textContent = 'Enter the amount of boxes you want?'
container.style.cssText = 
    'display:flex; justify-content:center; flex-wrap:wrap; gap:2px; height:100%; width:100%; overflow:hidden;'

function render(p = 10){
    for(j = 0 ; j < p; j++){
        for(i = 0; i < p; i++){
            const square = document.createElement('div')
            square.classList.add('grid')
            square.style.cssText = 'border:1px solid red; width:16px; height:16px; border-radius:10px;'
            container.appendChild(square);
        }
    }
}
render(10)
let x = -255
const s = document.querySelectorAll('.grid')
s.forEach(node =>{
    node.addEventListener('mouseover',(e)=>{
        node.style.backgroundColor = `rgb(${x-=10},${x-=10},${x-=10})`;
    })
})
const button = document.querySelector('.btn')
button.addEventListener('click',(e)=>{
    let q = parseInt(prompt('Enter the amount of boxes you want!'))
    const container = document.querySelector('.container')
    const btn = document.createElement('button')
    btn.setAttribute('class','btn')

    row.style.cssText ='display:flex; gap:10px; flex-direction:column; padding:10px;'
    container.style.cssText = 
        'display:flex; justify-content:center; flex-wrap:wrap; gap:2px; height:100%; width:100%; overflow:hidden;'

    function render(p = 10){
        for(j = 0 ; j < p; j++){
            for(i = 0; i < p; i++){
                const square = document.createElement('div')
                square.classList.add('grid')
                square.style.cssText = 'border:1px solid red; width:16px; height:16px; border-radius:10px;'
                container.appendChild(square);
            }
        }
    }
    render(q)

    const s = document.querySelectorAll('.grid')
    s.forEach(node =>{
        node.addEventListener('mouseover',(e)=>{
            node.style.backgroundColor = `rgb(${x-=10},${x-=10},${x-=10})`;
        })
    })
})
