const cookie = document.getElementById('cookie');
const counter = document.getElementById('clicker__counter');

cookie.onclick = function clicker() {
    let click = counter.textContent++;
    if (click % 2 == 0) {
        cookie.width = 300;
    } else {
        cookie.width = 200;
    }
}