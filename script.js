
const adviceId = document.querySelector('.advice-number');
const quote = document.querySelector('.quote');
const button = document.querySelector('.btn');

button.addEventListener('click', process);
let data ={};

function process() {
    fetch('https://api.adviceslip.com/advice')
    .then(res => res.json())
    .then(loadingData => {
        data = loadingData;
        adviceId.innerHTML = "Advice #" + data.slip.id;
        quote.innerHTML = data.slip.advice;
        //console.log(data);
    });
}
