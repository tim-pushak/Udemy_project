"use strict";


// 80 requestAnimationFrame()

const bttn = document.querySelector('.bttn'),
      elem = document.querySelector('.boxDiv');
let pos = 0;

function myAnimation() {
    pos++;
    elem.style.top = pos + "px";
    elem.style.left = pos + 'px';

    if (pos < 300) {
        requestAnimationFrame(myAnimation);
    }
}

bttn.addEventListener('click', () => requestAnimationFrame(myAnimation));

// if i want to cancel the animation

let id = requestAnimationFrame(myAnimation);
cancelAnimationFrame(id);

// Older code

// const bttn = document.querySelector('.bttn');

// function myAnimation() {
//     const elem = document.querySelector('.boxDiv');
//     let pos = 0;

//     const id = setInterval(frame, 10);
//     function frame() {
//         if (pos == 300) {
//             clearInterval(id);
//         } else {
//             pos++;
//             elem.style.top = pos + "px";
//             elem.style.left = pos + 'px';
//         }
//     }
// }

// bttn.addEventListener('click', myAnimation);