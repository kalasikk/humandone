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
            //changeHeaderColor();
            //pullOutSection();
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

//scroll pages
(function() {
	"use strict";
	/*[pan and well CSS scrolls]*/
	var pnls = document.querySelectorAll('.screen').length,
		scdir, hold = false;
	var currentScreen = 1;
	var currentCardBlock = 1;
	function _scrollY(obj) {
		var slength, plength, pan, step = 100,
			vh = window.innerHeight / 100,
			vmin = Math.min(window.innerHeight, window.innerWidth) / 100;
		if ((this !== undefined && this.id === 'well') || (obj !== undefined && obj.id === 'well')) {
			pan = this || obj;
			plength = parseInt(pan.offsetHeight / vh);
		}
		if (pan === undefined) {
			return;
		}
		plength = plength || parseInt(pan.offsetHeight / vmin);
		slength = parseInt(pan.style.transform.replace('translateY(', ''));
		if (scdir === 'up' && Math.abs(slength) < (plength - plength / pnls)) {
			slength = slength - step;
		} else if (scdir === 'down' && slength < 0) {
			slength = slength + step;
		} else if (scdir === 'top') {
			slength = 0;
		}
		if (hold === false) {
			hold = true;
			// pan.style.transform = 'translateY(' + slength + 'vh)';
			changeScreen(currentScreen, slength, pan, scdir, currentCardBlock);
			setTimeout(function() {
				hold = false;
			}, 1000);
		}
		console.log(currentScreen);
		console.log(scdir + ':' + slength + ':' + plength + ':' + (plength - plength / pnls));
	}

	function changeScreen(currScreen, slength, pan, scdir, currCardBlock) {
		let done = document.getElementById('done');
		done.classList.remove(...done.classList);
		console.log('changeScreen', scdir, currentScreen);
		if (currScreen === 1 && scdir === 'up') {
			let textContainer1 = document.querySelector('#screen1 .text-container1');
			let textContainer2 = document.querySelector('#screen1 .text-container2');
			let textContainer10 = document.querySelector('#screen1 .text-container10');
			let bgWrapper = document.getElementById('bg-wrapper')
			let screen3 = document.getElementById('screen3');
			textContainer1.style.transform = 'translateY(-150px)';
			textContainer1.style.visibility = 'hidden';
			textContainer1.style.opacity = '0';
			textContainer1.style.transition = 'transform 0.5s, visibility 0.5s, opacity 0.5s';
			textContainer2.style.transform = 'translateY(-150px)';
			textContainer2.style.visibility = 'hidden';
			textContainer2.style.opacity = '0';
			textContainer2.style.transition = 'transform 0.5s, visibility 0.5s, opacity 0.5s';
			textContainer10.style.transform = 'translateY(0vh)';
			textContainer10.style.visibility = 'visible';
			textContainer10.style.opacity = '1'; 
			textContainer10.style.transition = 'transform 0.5s 1s, visibility 0.5s 1s, opacity 0.5s 1s';
			screen3.style.marginTop = '-32.75vh';
			screen3.style.transition = 'width 1s, border-radius 1s, margin 0.5s 1s, opacity 0.5s 1s';
			screen3.style.opacity = '1';
			bgWrapper.style.backgroundColor = 'rgba(19, 20, 23, 0)';
			currentScreen = 2;
		} else if (currScreen === 2 && scdir === 'down') {
			let textContainer1 = document.querySelector('#screen1 .text-container1');
			let textContainer2 = document.querySelector('#screen1 .text-container2');
			let textContainer10 = document.querySelector('#screen1 .text-container10');
			let bgWrapper = document.getElementById('bg-wrapper')
			let screen3 = document.getElementById('screen3');
			textContainer1.style.transform = 'translateY(0)';
			textContainer1.style.visibility = 'visible';
			textContainer1.style.opacity = '1';
			textContainer1.style.transition = 'transform 0.5s 1s, visibility 0.5s 1s, opacity 0.5s 1s';
			textContainer2.style.transform = 'translateY(0)';
			textContainer2.style.visibility = 'visible';
			textContainer2.style.opacity = '1';
			textContainer2.style.transition = 'transform 0.5s 1s, visibility 0.5s 1s, opacity 0.5s 1s';
			textContainer10.style.transform = 'translateY(25vh)';
			textContainer10.style.visibility = 'hidden';
			textContainer10.style.opacity = '0';
			textContainer10.style.transition = 'transform 0.5s, visibility 0.5s, opacity 0.5s';
			screen3.style.marginTop = '0';
			screen3.style.opacity = '0';
			screen3.style.transition = 'width 1s, border-radius 1s, margin 0.5s, opacity 0.5s'; 
			bgWrapper.style.backgroundColor = 'rgba(19, 20, 23, 1)';
			currentScreen = 1;
		} else if (currScreen === 2 && scdir === 'up') {
			pan.style.transform = 'translateY(-67.25vh)';
			let screen3 = document.getElementById('screen3');
			screen3.style.width = '100%';
			screen3.style.borderRadius = '0';
			document.querySelectorAll('.nav-link').forEach((el) => {
				el.classList.toggle('nav-link-black');
			});
			done.classList.add('done-purple');
			currentScreen = 3;
		} else if (currScreen === 3 && scdir === 'down') {
			pan.style.transform = 'translateY(0)';
			let screen3 = document.getElementById('screen3');
			screen3.style.width = '87.5%';
			screen3.style.borderRadius = '40px';
			currentScreen = 2;
			document.querySelectorAll('.nav-link').forEach((el) => {
				el.classList.toggle('nav-link-black');
			});
			done.classList.remove('done-purple');
		} else if (currScreen === 3 && scdir === 'up') {
			pan.style.transform = 'translateY(-136.75vh)';
			let screen4 = document.getElementById('screen4');
			screen4.style.width = '100%';
			screen4.style.borderRadius = '0';
			document.querySelectorAll('.nav-link').forEach((el) => {
				el.classList.toggle('nav-link-black');
			});
			done.classList.add('done-blue');
			currentScreen = 4;
		} else if (currScreen === 4 && scdir === 'down') {
			pan.style.transform = 'translateY(-67.25vh)';
			let screen4 = document.getElementById('screen4');
			screen4.style.width = '87.5%';
			screen4.style.borderRadius = '40px';
			document.querySelectorAll('.nav-link').forEach((el) => {
				el.classList.toggle('nav-link-black');
			});
			done.classList.add('done-purple');
			currentScreen = 3;
		} else if (currScreen === 4 && scdir === 'up') {
			pan.style.transform = 'translateY(-204vh)';
			let screen5 = document.getElementById('screen5');
			screen5.style.width = '100%';
			screen5.style.borderRadius = '0';
			document.querySelectorAll('.nav-link').forEach((el) => {
				el.classList.toggle('nav-link-black');
			});
			done.classList.add('done-pink');
			currentScreen = 5;
		} else if (currScreen === 5 && scdir === 'down') {
			pan.style.transform = 'translateY(-136.75vh)';
			let screen5 = document.getElementById('screen5');
			screen5.style.width = '87.5%';
			screen5.style.borderRadius = '40px';
			document.querySelectorAll('.nav-link').forEach((el) => {
				el.classList.toggle('nav-link-black');
			});
			done.classList.add('done-blue');
			currentScreen = 4;
		} else if (currScreen === 5 && scdir === 'up') {
			pan.style.transform = 'translateY(-271.25vh)';
			let screen6 = document.getElementById('screen6');
			screen6.style.width = '100%';
			screen6.style.borderRadius = '0';
			document.querySelectorAll('.nav-link').forEach((el) => {
				el.classList.toggle('nav-link-black');
			});
			currentScreen = 6;
		} else if (currScreen === 6 && scdir === 'down') {
			pan.style.transform = 'translateY(-204vh)';
			let screen6 = document.getElementById('screen6');
			screen6.style.width = '87.5%';
			screen6.style.borderRadius = '40px';
			document.querySelectorAll('.nav-link').forEach((el) => {
				el.classList.toggle('nav-link-black');
			});
			done.classList.add('done-pink');
			currentScreen = 5;
		} else if (currScreen === 6 && scdir === 'up') {
			pan.style.transform = 'translateY(-371.25vh)';
			document.querySelectorAll('.nav-link').forEach((el) => {
				el.classList.toggle('nav-link-black');
			});
			currentScreen = 7;
		} else if (currScreen === 7 && scdir === 'down') {
			pan.style.transform = 'translateY(-271.25vh)';
			document.querySelectorAll('.nav-link').forEach((el) => {
				el.classList.toggle('nav-link-black');
			});
			currentScreen = 6;
		}	
	}
	/*[swipe detection on touchscreen devices]*/
	function _swipe(obj) {
		var swdir,
			sX,
			sY,
			dX,
			dY,
			threshold = 100,
			/*[min distance traveled to be considered swipe]*/
			slack = 50,
			/*[max distance allowed at the same time in perpendicular direction]*/
			alT = 500,
			/*[max time allowed to travel that distance]*/
			elT, /*[elapsed time]*/
			stT; /*[start time]*/
		obj.addEventListener('touchstart', function(e) {
			var tchs = e.changedTouches[0];
			swdir = 'none';
			sX = tchs.pageX;
			sY = tchs.pageY;
			stT = new Date().getTime();
			//e.preventDefault();
		}, false);

		obj.addEventListener('touchmove', function(e) {
			e.preventDefault(); /*[prevent scrolling when inside DIV]*/
		}, false);

		obj.addEventListener('touchend', function(e) {
			var tchs = e.changedTouches[0];
			dX = tchs.pageX - sX;
			dY = tchs.pageY - sY;
			elT = new Date().getTime() - stT;
			if (elT <= alT) {
				if (Math.abs(dX) >= threshold && Math.abs(dY) <= slack) {
					swdir = (dX < 0) ? 'left' : 'right';
				} else if (Math.abs(dY) >= threshold && Math.abs(dX) <= slack) {
					swdir = (dY < 0) ? 'up' : 'down';
				}
				if (obj.id === 'well') {
					if (swdir === 'up') {
						scdir = swdir;
						_scrollY(obj);
					} else if (swdir === 'down' && obj.style.transform !== 'translateY(0)') {
						scdir = swdir;
						_scrollY(obj);

					}
					e.stopPropagation();
				}
			}
		}, false);
	}
	/*[assignments]*/
	var well = document.getElementById('well');
	well.style.transform = 'translateY(0)';
	well.addEventListener('wheel', function(e) {
		if (e.deltaY < 0) {
			scdir = 'down';
		}
		if (e.deltaY > 0) {
			scdir = 'up';
		}
		e.stopPropagation();
	});
	well.addEventListener('wheel', _scrollY);
	_swipe(well);
})();

// cards 

document.addEventListener( 'DOMContentLoaded', function () {
	new Splide( '.splide', {
		type : 'loop',
		width: '1040px',
		arrows: 'slider',
		speed: '600'
	} ).mount();
} );

