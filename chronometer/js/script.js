const tempo = document.getElementById('tempo');
const start = document.getElementById('start');
const pause = document.getElementById('pause');
const reset = document.getElementById('reset');

let time = 0;
tempo.innerHTML = time;
let startChrono = false;
let clock;

start.addEventListener('click', function () {
    if (startChrono) {
        return;
}
    startChrono = true;
    clock = setInterval(() => {
    time++;
    tempo.innerHTML = time;
}, 100);
});
