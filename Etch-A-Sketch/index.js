const container = document.querySelector('.container')
container.style.cssText = 
    'display:flex; justify-content:center; flex-wrap:wrap; gap:2px; height:450px ; width:455px;'


for(j = 0 ; j < 10; j++){
    for(i = 0; i < 10; i++){
        const square = document.createElement('div')
        square.classList.add('grid')
        square.style.cssText = 'border:1px solid red; width:40px; height:40px;'
        container.appendChild(square);
    }
}

const s = document.querySelectorAll('.grid')
s.forEach(node =>{
    node.addEventListener('mouseover',(e)=>{
        node.style.backgroundColor = 'blue';
    })
})

