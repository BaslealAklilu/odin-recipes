const box = document.querySelectorAll('.box')
const a = document.querySelector('.a')
const s = document.querySelector('.s')
const d = document.querySelector('.d')
const f = document.querySelector('.f')
const g = document.querySelector('.g')
const h = document.querySelector('.h')
const j = document.querySelector('.j')
const k = document.querySelector('.k')
const l = document.querySelector('.l')
const audi1 = document.getElementById('audi1')
const audi2 = document.getElementById('audi2')
const audi3 = document.getElementById('audi3')
const audi4 = document.getElementById('audi4')
const audi5 = document.getElementById('audi5')
const audi6 = document.getElementById('audi6')
const audi7 = document.getElementById('audi7')
const audi8 = document.getElementById('audi8')
const audi9 = document.getElementById('audi9')

document.addEventListener("keydown", function(event) {
    let key = event.key;
    if (key === 'a'){
        a.classList.add('boxx')
        audi1.play()
    }
    else if(key === 's'){
        s.classList.toggle('boxx')
        audi2.play()
    }
    else if(key === 'd'){
        d.classList.toggle('boxx')
        audi3.play()
    }
    else if(key === 'f'){
        f.classList.toggle('boxx')
        audi4.play()
    }
    else if(key === 'g'){
        g.classList.toggle('boxx')
        audi5.play()
    }
    else if(key === 'h'){
        h.classList.toggle('boxx')
        audi6.play()
    }
    else if(key === 'j'){
        j.classList.toggle('boxx')
        audi7.play()
    }
    else if(key === 'k'){
        k.classList.toggle('boxx')
        audi8.play()
    }
    else if(key === 'l'){
        l.classList.toggle('boxx')
        audi9.play()
    }
    console.log(typeof(key),key)
  });


  document.addEventListener("keyup", function(event) {
    let key = event.key;
    if (key === 'a'){
        a.classList.remove('boxx')
    }
    else if(key === 's'){
        s.classList.remove('boxx')
    }
    else if(key === 'd'){
        d.classList.remove('boxx')
    }
    else if(key === 'f'){
        f.classList.remove('boxx')
    }
    else if(key === 'g'){
        g.classList.remove('boxx')
    }
    else if(key === 'h'){
        h.classList.remove('boxx')
    }
    else if(key === 'j'){
        j.classList.remove('boxx')
    }
    else if(key === 'k'){
        k.classList.remove('boxx')
    }
    else if(key === 'l'){
        l.classList.remove('boxx')
    }
})

// box.forEach(x =>{
//     x.addEventListener('keyup', e=>{
//         x.classList.remove('boxx')
//     })
// })

// box.forEach(x =>{
//     x.addEventListener('keydown',e=>{
//         let key = e.key
//         if (key === 'a'){
//             console.log('Okay')
//         }

//     })
// })
// box.forEach(x =>{
//     window.addEventListener("keypress", e => {
//         x.classList.toggle('boxx')
//     });

// })


// function number(num){
//     if (num == 0){
//         return 1
//     }
//     else{
//         number(num - 1)
//         console.log(num)
//     }
// }


// number(10)