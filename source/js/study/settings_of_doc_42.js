"use strict";

// (42) Settings of document, window, and work with it 

// offset (offsetLeft, offsetTop), (offsetWidth, offsetHeight);

// client (clientLeft, clientTop), (clientWidth, clientHeight);

// scroll (scrollTop), (scrollHeight);

// scrollBy(somenumeber) від поточного положення переміщує and scrollTo(somenumber) переміщує відносно всієї сторінки 


const example = document.querySelector('.example');

const width = example.scrollWidth;
const height = example.scrollHeight;

console.log(width, height);

console.log(example.getBoundingClientRect()); // так можна отримати точні координати елемента

//
const exampleToo = document.querySelector('.exampleToo');
 
exampleToo.addEventListener('click', () => {
   exampleToo.style.height =exampleToo.scrollHeight + 'px';
    
    console.log(exampleToo.scrollTop);
});

/// get styles

const style = window.getComputedStyle(example);

console.log(style.display);

console.log(document.documentElement.scrollTop); // скільки пх юзер вже прогорнув
