"use strict";

// (28) Get elements from the page

// by ID
const box = document.getElementById('box');
console.log(box);

// by TagName
const btns = document.getElementsByTagName('button'); // now we get not just one element, but arrive or "HTML Collection()", with different elements, that page had with tag "button" 
const btns2 = document.getElementsByTagName('button');    

console.log(btns);
console.log(btns2[2]); // if i wanna just only second button and this btn have index "1"

// by className
const vasya = document.getElementsByClassName('vasya');

console.log(vasya);

// also exist "getElementByName" but it not usability






// by selectorName (className) with forEach
// тут виводиться всі елементи окремо
const hearts = document.querySelectorAll('.heart'); // note that i type "." before class name and don't forget about ''

hearts.forEach(item => { // callback function where "item" is "hearts" 
    console.log(item); 
}); // i can also just write console.log(hearts); but method "forEach" can allow me to return each elements singly

// а тут виводиться тільки перший елемент зі списку
const oneHeart = document.querySelector('.heart');
console.log(oneHeart);


