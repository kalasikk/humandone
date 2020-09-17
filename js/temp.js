let screen3 = document.getElementById('screen3');
let screen4 = document.getElementById('screen4');
let screen5 = document.getElementById('screen5');
let screen6 = document.getElementById('screen6');
let content3 = document.getElementById('content3');
let content4 = document.getElementById('content4');
let content5 = document.getElementById('content5');
let content6 = document.getElementById('content6');
let textContainer6 = document.getElementsByClassName('text-container6')[0];
let title4 = document.getElementsByClassName('title4')[0];


let ticking = false;

window.onscroll = (e) => {
    if (!ticking) {
        window.requestAnimationFrame(function() {
            changeHeaderColor();
            pullOutSection();
            scaleScreen(e);
          ticking = false;
        });
    
        ticking = true;
    }
    
}

function vh(v) {
    var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    return (v * h) / 100;
}

changeHeaderColor = () => {
    let done = document.getElementById('done');
    done.classList.remove(...done.classList);
    if (window.pageYOffset > vh(0) && window.pageYOffset < vh(160)) {
        document.querySelectorAll('.nav-link').forEach((el) => {
            el.classList.remove('nav-link-black');
        });
        done.classList.add('done-white');
    } else if (window.pageYOffset > vh(160) && window.pageYOffset < vh(230)) {
        document.querySelectorAll('.nav-link').forEach((el) => {
            el.classList.add('nav-link-black');
        });
        done.classList.add('done-purple');
    } else if (window.pageYOffset > vh(230) && window.pageYOffset < vh(300)){
        document.querySelectorAll('.nav-link').forEach((el) => {
            el.classList.remove('nav-link-black');
        });
        done.classList.add('done-blue');
    } else if (window.pageYOffset > vh(300) && window.pageYOffset < vh(366)) {
        document.querySelectorAll('.nav-link').forEach((el) => {
            el.classList.add('nav-link-black');
        });
        done.classList.add('done-pink');
    } else if (window.pageYOffset > vh(366) && window.pageYOffset < vh(578)) {
        document.querySelectorAll('.nav-link').forEach((el) => {
            el.classList.remove('nav-link-black');
        });
        done.classList.add('done-white');
    } else if (window.pageYOffset > vh(578)) {
        document.querySelectorAll('.nav-link').forEach((el) => {
            el.classList.add('nav-link-black');
        });
        done.classList.add('done-black');
    }
}

pullOutSection = () => {
    //pull out screen3
    if (window.pageYOffset > vh(120)) { 
        screen3.style.width = '100%';
        screen3.style.borderRadius = '0';
    } else {
        screen3.style.width = '1260px';
        screen3.style.borderRadius = '40px';
    }
    //pull out screen4
    if (window.pageYOffset > vh(190)) {
        screen4.style.width = '100%';
        screen4.style.borderRadius = '0';
    } else {
        screen4.style.width = '1260px';
        screen4.style.borderRadius = '40px';
    }
    //pull out screen5
    if (window.pageYOffset > vh(260)) {
        screen5.style.width = '100%';
        screen5.style.borderRadius = '0';
    } else {
        screen5.style.width = '1260px';
        screen5.style.borderRadius = '40px';
    }
    //pull out screen6
    if (window.pageYOffset > vh(330)) {
        screen6.style.width = '100%';
        screen6.style.borderRadius = '0';
        textContainer6.style.marginLeft = '0';
        textContainer6.style.marginRight = '0';
        title4.style.fontSize = '100px';
    } else {
        screen6.style.width = '1260px';
        screen6.style.borderRadius = '40px';
        textContainer6.style.marginLeft = '110px';
        textContainer6.style.marginRight = '110px';
        title4.style.fontSize = '80px';
    }
}

function fadeCards() {
    document.querySelectorAll('.card:not(:hover)').forEach(el =>{
        el.classList.add('faded');
    });
}

function unfadeCards() {
    document.querySelectorAll('.card').forEach(el =>{
        el.classList.remove('faded');
    });
}
//scroll zoom
let lastScrollTop = 0;
const SCALE_MAX = 30;
const SCALE_MIN = 1;
let currentScale = 1;
let firstScreenHidden = false;

scaleScreen = (e) => {
    let screen2 = document.querySelector('#main');
    let text1 = document.querySelector('#screen1 .text-container1');
    let text2 = document.querySelector('#screen1 .text-container2');
    let direction = getScrollDirection();

    if (direction === 'down' && currentScale < SCALE_MAX) {
        currentScale += 0.2;
    } else if (direction === 'up' && currentScale > SCALE_MIN){
        currentScale -= 0.2;
    }
    if (window.pageYOffset === 0) currentScale = 1;
    text1.style.transform = `scale(${currentScale})`;
    text2.style.transform = `scale(${currentScale})`;

    if (window.pageYOffset >= vh(100) && !firstScreenHidden) {
        screen2.classList.remove('hidden');
        firstScreenHidden = true;
    } else if(window.pageYOffset < vh(100) && firstScreenHidden){
        screen2.classList.add('hidden');
        firstScreenHidden = false;
    }
}

getScrollDirection = () => {
    let st = window.pageYOffset || document.documentElement.scrollTop;
    let dir;
    if (st > lastScrollTop){
        dir = 'down';
    } else {
        dir = 'up';
    }
    lastScrollTop = st <= 0 ? 0 : st;
    return dir;
}

