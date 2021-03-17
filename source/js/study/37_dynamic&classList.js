"use strict";


// (37) dynamic classList and events

// classList and item()
// add(), remove() 
// toggle() - він додає елемент якщо його немає або видаляє якщо він є
// contains

const btns = document.querySelectorAll('button'),
      wrappers = document.querySelector('.obolonka');

// console.log(btns[0].classList.item(0));
// console.log(btns[0].classList.add('red'));
// console.log(btns[0].classList.remove('vasya'));
// console.log(btns[0].classList.toggle('ivan'));

// if (btns[0].classList.contains('red')) {
//     console.log('true');
// } else {
//     console.log('false');
// }


btns[0].addEventListener('click', () => {
    if (!btns[1].classList.contains('red')) {
        btns[1].classList.add('red');
    } else {
        btns[1].classList.remove('red');
    }

    // or but not understandble
    // btns[1].classList.toggle('red');
}); 

// className is not useble !!!

wrappers.addEventListener('click', (event) => {
    // console.log(event.target);
    if (event.target && event.target.tagName == 'BUTTON') {
        console.log('Hello');
    }
});


const btn = document.createElement('button');
btn.classList.add('blue');
wrappers.append(btn);
btn.textContent = '7';
