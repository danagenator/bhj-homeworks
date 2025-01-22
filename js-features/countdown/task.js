let time = 59;
const countdown = setInterval(() => {
    document.getElementById('timer').textContent = time;
    if (time <= 0) {
        alert("Вы победили в конкурсе!");
        clearInterval(countdown)
    }
    time--;
}, 1000); 