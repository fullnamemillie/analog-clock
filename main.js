let h = document.querySelector('.hour');
let m = document.querySelector('.minute');
let s = document.querySelector('.second');

function clock() {
    let d = new Date();

    let hh = d.getHours() * 30;
    let mm = d.getMinutes() * 6;
    let ss = d.getSeconds() * 6;

    h.style.transform = `rotate(${hh}deg)`;
    m.style.transform = `rotate(${mm}deg)`;
    s.style.transform = `rotate(${ss}deg)`;
};

setInterval(clock, 1000);