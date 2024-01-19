const container = document.querySelector('.container')
container.style.backgroundColor = 'red';


const paragraph = document.createElement('p')
paragraph.textContent = "Hey I'm red"
paragraph.style.color = 'black';
paragraph.style.height = '200px';
paragraph.style.fontSize = '15px'

const Header = document.createElement('h3')
Header.textContent = "I'm a blue h3"
Header.style.color = 'blue';

const dive = document.createElement('div')
// // dive.style.border = '1px solid black'
dive.style.backgroundColor = 'pink';


const h1 = document.createElement('h1')
h1.textContent = "I'm in a div"

const para = document.createElement('p')
para.textContent = "Me too"
dive.appendChild(h1)
dive.appendChild(para)


container.appendChild(paragraph)
container.appendChild(Header)
container.appendChild(dive)


const btn = document.querySelector('.btn')
btn.addEventListener('click',(e) =>{
    console.log(e)
})
// const container = document.querySelector('.container')
// const div = document.createElement('div')
// div.style.color = 'red'
// div.style.cssText = 'background: pink;'
// div.textContent = 'Hello World!'

// container.appendChild(div)