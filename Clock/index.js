
// let hour = d.getHours();
// let minutes = d.getMinutes();

const hours = document.querySelector('.hour')
const minute = document.querySelector('.minute')
const seconds = document.querySelector('.second')


// console.log(hour,minutes,seconds)
setInterval(() =>{
    const now = new Date();
    let second = now.getSeconds()
    let count = (second / 60) * 360
    seconds.style.cssText = `transform:rotateZ(${count}deg)`
},1000)


setInterval(() =>{
    const now = new Date();
    let minutes = now.getMinutes()
    let count = (minutes / 60) * 360
    minute.style.cssText = `transform:rotateZ(${count}deg)`
},60000)


