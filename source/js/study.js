"use strict";

// SPREAD operator ES6 - ES9 //

/* let a = 5;
    b = a;

b = b + 5;

console.log(b); */ // it works only with simple things like this //

/* const obj = {
    a: 5,
    b: 1
};

const copy = obj;

copy.a = 10;

console.log(copy);
console.log(obj); */ // this example how it doesn't works in difficult things like this and arrayes // 
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// i write down example where it works with anything, but notice that it is only поверхосной тип copy(not global: "x" doesn't change) ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function copy(mainObj) {
    let objCopy = {};

    let key;

    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }

    return objCopy;
}

const numbers = {
    a: 5,
    b: 3,
    c: {
        x: 20,
        y: 10
    }
};

const newNumbers = copy(numbers);
newNumbers.a = 10;


// console.log(newNumbers);
// console.log(numbers);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const add = {
    vasya: 1,
    what: 10
};

// console.log(Object.assign(numbers, add)); // на першому місці куда закидувати об'єкт а на другому який закидувати //
const clone = (Object.assign({}, add));
clone.vasya = 10;

console.log(add);
console.log(clone);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////










//ARRAYES (масиви) //
/* 
const arr = [1, 33, 24, 5, 8];

arr.sort(compareNum);

function compareNum(a, b) {
    return a - b;
}

console.log(arr); */

/* 
// arr.pop();
// arr.push(10); 
 */


/* 
arr[99] = 0;
console.log(arr.length);
console.log(arr);
 */




/* // щоб перебрати масив //
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
//

// або так //
for (let value of arr) {
    console.log(value);
}
// 
*/

// або так  але можна більш точніше насторїти because it`s callback function //

// arr.forEach(function (item, i, arr) {
//     console.log(`${i}: ${item} inside array ${arr}`);
// });

///////////////////////////////////////////////////////////

/* const str = prompt("what?", "");
const products = str.split(", ");
products.sort();
console.log(products.join("; ")); */
















// OBJECTS //

/* const options = {
    name: 'test', // "name: 'test'" - is method, "name" - is key or property, 'test' - is value
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() {
        console.log('test');
    }
}

options.makeTest(); 

const {border, bg} = options.colors; // destructuring code, the first thing, we type what do we want to get then type from what object we will do this

console.log(border); */

// console.log(Object.keys(options).length); //important thing and most useble in js


/* console.log(options.name);

delete options.name;

console.log(options); */



/* console.log(options["colors"]["border"]); */ // it works but don`t practic and cool in usability


/*
let counter = 0;

for (let key in options) {
    if(typeof(options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`Property ${i} have value ${options[key][i]}`);
        }
    } else {
        console.log(`Property ${key} have value ${options[key]}`);
        counter++;
    }
};

console.log(counter); */



// MY PERSONAL OBJECT LIKE ^^ //

/* 
const features = {
    name: 'hello',
    age: 23,
    width: 1123,
    height: 1123,
    colors: {
        border: 'red',
        bg: 'blue'
    },
    makePlan: function() {
        let plan = 25;

        if(plan === 15) {
            let cool = 'oh men, it`s 15';
            console.log(cool);
        } else if(plan === 25) {
            let wow = 'not bad';
            console.log(wow);
        } else {
            let what = 'error bro';
            console.log(what);
        }
    }
}

features.makePlan();


console.log(features); */

























// CALLBACK FUNCTION //

/* 
function learnJS(lang, callback) {
    console.log(`Я вчу ${lang}!`);
    callback();
}

function done() {
    console.log('done');
}

learnJS('JavaScript', done); // now i type function 'done' without "()" ( like: "done();" ), because this function will be come to "callback(here)" in first function "learnJS" //
*/














    



 
 










//CICLES//


//1///

/* let num = 50;

while (num <= 55) {
    console.log(num);
    num++;
} */

//2///

/* let num = 50;

do {
    console.log(num);
    num++;
}
while (num <= 55);
 */

//3 more useble and famous///
//1 step//

/* for (let i = 1; i < 8; i++) {
    console.log(i);
} */

//2 step//

/* let num = 50;
for (let i = 1; i < 8; i++) {
    console.log(num);
    num++;
} */

//3 step//

/* for (let i = 1; i < 10; i++) {
    if (i === 6) {
        // break;
        continue;
    }

    console.log(i);
} */








 //CICLES too//

// let i = 0;

// while (i < 2) {
//     const a = prompt('Який останній фільм ви бачили?', ''),
//           b = prompt('У скільки його оціните?', '');

//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDb.movies[a] = b;
//         console.log('done');
//         i++;
//     } else {
//         console.log('error');
//         i--;
//     }
// }

//OR//

// let i = 0;

// do {
//     const a = prompt('Який останній фільм ви бачили?', ''),
//           b = prompt('У скільки його оціните?', '');

//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDb.movies[a] = b;
//         console.log('done');
//         i++;
//     } else {
//         console.log('error');
//         i--;
//     }
// }
// while (i < 2);