"use strict";

// 65 Patterns and flags

//SAMPLE:
// new RegExp('pattern', 'flags');
// /pattern/f

//FLAGS:
// i - коли треба щось знайти не залежно від регістру
// g - глобальний, коли треба знайти декілька входжень
// m - включає багаторядковий режим з переносами

// METHODS:
// search
// replace
// match
// test (true/false) - дивиться чи є хоть щось подібне

// CLASSES: (const reg = /\d/ig)
// \d - numbers
// \w - words
// \s - spaces 

// NO CLASSES: (const reg = /\D/ig)
// \D - not numbers
// \W - not words
// \S - not spaces 


// const ans = prompt('Type your name here');

// const ask = /n/i;

// console.log(ans.search(ask));


// const pass = prompt('Password')

// console.log(pass.replace(/./g, "*")); // but if i want to find real "." I need to write "/\./"
// console.log(pass.replace(/shit/g, "s**t")); 


const str = 'My name is V2U3i5';

console.log(str.match(/\w\d\w\d\w\d/i));