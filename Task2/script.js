let timer;
let elapsedTime = 0;
let isRunning = false;

const display = document.getElementById('display');
const laps = document.getElementById('laps');

function formatTime(time) {
    const date = new Date(time);
    return date.toISOString().substr(11, 8);
}

function updateDisplay() {
    display.textContent = formatTime(elapsedTime);
}

document.getElementById('start').addEventListener('click', () => {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(() => {
            elapsedTime += 1000;
            updateDisplay();
        }, 1000);
    }
});

document.getElementById('pause').addEventListener('click', () => {
    clearInterval(timer);
    isRunning = false;
});

document.getElementById('reset').addEventListener('click', () => {
    clearInterval(timer);
    isRunning = false;
    elapsedTime = 0;
    updateDisplay();
    laps.innerHTML = '';
});
