const btn = document.querySelector('#btn')
const row = document.querySelector('.row')
let recognition = new webkitSpeechRecognition();
recognition.continuous = true;
let previousTranscript = []
btn.addEventListener("click",(e)=>{

    recognition.start()
    recognition.addEventListener("result", function(event) {
        for(let i = 0 ; i <= event.results.length; i++){
            const latestTranscript = event.results[i][0].transcript
            if (!previousTranscript.includes(latestTranscript)){
                const p = document.createElement('p')
                p.textContent = `${latestTranscript}`
                row.append(p)
            }
            console.log(event.results)
        }
      });

})

