let textArea = document.getElementById('counter');
let countDown = document.getElementById('click');
let timer = document.getElementById('timer')
console.log(timer)
let count = 0
let timerId;
const clicker = () => { 
    if(count === 0) textArea.textContent = ``
    count++
    textArea.textContent += `Clicked ${count} times  || `
    clearTimeout(timerId)
    timerId= setTimeout(function() {
        count = 0
        textArea.textContent = ``
    }, 5000)
 }
console.log(timerId)
