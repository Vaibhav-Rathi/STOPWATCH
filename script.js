let timer;
let seconds = 0;
let isRunning = false;

function updateTimerDisplay() {
    let hrs = String(Math.floor(seconds / 3600)).padStart(2, '0');
    let mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
    let secs = String(seconds % 60).padStart(2, '0');
    document.getElementById('timer').textContent = `${hrs}:${mins}:${secs}`;
}

document.getElementById('start').addEventListener('click', () => {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(() => {
            seconds++;
            updateTimerDisplay();
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
    seconds = 0;
    updateTimerDisplay();
});

updateTimerDisplay();