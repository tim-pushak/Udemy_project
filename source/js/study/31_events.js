"use strict";

// (31) Events

// preventDefault();
// (event) => {}; the same function(event) {};
//IMPORTANR THINGS



const btn = document.querySelector('buttonnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn'),
      overlay = document.querySelector('.overlay'),
      btns = document.querySelectorAll('button');

let i = 0;
const deleteElement = (e) => {
    // alert('Hi');
    console.log(e.currentTarget);
    console.log(e.type);
    i++;
    if (i == 1) {
        btn.removeEventListener('click', deleteElement);
    }
};

// btn.addEventListener('click', deleteElement); // deleteElement without '()'
// overlay.addEventListener('click', deleteElement); 

// and now if I wanna do these things for all elements
btns.forEach(btn => {
    btn.addEventListener('click', deleteElement, {once: true}); 
});

/////////////////////////////////////////////////
const link = document.querySelector('.linkA');

link.addEventListener('click', function(event) {
    event.preventDefault();

    console.log(event.target);
});


