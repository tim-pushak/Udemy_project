"use strict";

// (29) ACTIONS WITH ELEMENTS

/* const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      vasya = document.getElementsByClassName('vasya'),
      hearts = document.querySelectorAll('.heart'),
      bomko = document.querySelectorAll('.bomko'),
    //   wrapper = wrapper.querySelector('.wrapper'), // wrapper а не document це буде більш чіткіше
      wrapper = document.querySelector('.wrapper'),
    //   oneHeart = wrapper.querySelector('.heart'), // wrapper а не document це буде більш чіткіше
      oneHeart = document.querySelector('.heart'),
      body = document.body;

console.dir(box); */
/* 
box.style.backgroundColor = 'blue';
btns[1].style.borderRadius = '100%'; // correct
// btns.style.borderRadius = '100%'; // incorrect 
*/

// THE SAME HERE ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// THAT'S HOW I CAN ADD CLASSES, DIV, TEXT OR SMTH ////////////////////////////////////////////////////////////////////////////////

/* box.style.cssText = 'background-color: red; font-size: 25px'; // when you have to write more than one css style

let num = 45; // very usable thing when you have to write smth like this, and don't forget about `` 
let color = 'red';
let radius = 100;
box.style.cssText = `background-color: ${color}; font-size: ${num}px`;
btns[1].style.cssText = `border-radius: ${radius}%`;


hearts.forEach(item => {
    item.style.fontSize = '20px';
    item.style.backgroundColor = 'blue';
    item.style.fontWeight = 'bold';
});
 */

/* for (let i = 0; i < hearts.length; i++) {
    hearts[i].style.fontSize = '20px';
    hearts[i].style.backgroundColor = 'blue';
    hearts[i].style.fontWeight = 'bold';
} */ // of course, in addition, I can make cicle, but that's not modern solution(decision) 



// THAT'S HOW I CAN ADD DIV OR TEXT ///////////////////////////////////////////////////////////////////
// const div = document.createElement('div');
// const text = document.createTextNode('I\'m here!');

// THAT'S HOW I CAN ADD CLASSES TO MY DIV OR TEXT /////////////////////////////////////////////////////
// div.classList.add('black');

// append & prepend / before & after ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// body.append(text); // global-body and append mean in the end body                        // if you wanna run this code, then you need add to src, js in html 'defer' 

// wrapper.append(div); // append                                                          // if you wanna run this code, then you need add to src, js in html 'defer'
// wrapper.appendChild(div); // appendChild the same but older


// wrapper.prepend(div);  // prepend                                                      // if you wanna run this code, then you need add to src, js in html 'defer'



// hearts[1].before(div); // before(); 
// hearts[1].after(div); // after();




// HOW ADD HTML TEXT IN JS /////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 1 variant // you can play with 'insertAdjacentHTML', 'beforeend', 'afterend' and so on 
// div.innerHTML = "<h1>Hello world!</h1>"; // I can add html structure
// div.insertAdjacentHTML('afterend', '<h2>hello</h2>');


// 2 variant but only with text
// div.textContent = "Hello"; // only with text


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Колись не було before after і так далі, а було insertBefore() or insertAfter() //////////////////////////////////////////////////////////

// wrapper.insertBefore(div, hearts[1]); // перший аргумент: шо вставляти, а другий: перед чим вставляти





 

// THAT'S HOW CAN I REMOVE SMTH ///////////////////////////
// vasya[1].remove(); // remove(); 

// AND VERY OLD REMOVE IS 'removeChild()' ///////////////////////////////////////////////////////
// wrapper.removeChild(hearts[0]);


// that's how can I replace smth (remove & replace another value) ////////////////////////////

// btns[0].replaceWith(bomko[1]); // replaceWith();
// wrapper.replaceChild(hearts[0], bomko[1]); // this oldest version 'replace()', and it has a place in this mad world







/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//that's how can I replace text or smth (it's my code)
/* const text1 = document.createTextNode('what');

bomko[2].replaceWith(text1); */




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
































/* 
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
 */




/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




















// (27) Math examples 

/* 1)
let x = 5;
alert( x++ ); // 5 but if i do this way ( ++x ) it will be 6;
 */

/* 2)
// [] + false + null + true;
// console.log([] + false + null + true);           // result NaN ([] + false = "false" (string)) and ([] + false + null = NaN) and, + true = NaN;
 */

/* 3)
let y = 1;
let x = y = 2; // note that, this code you must read from right to left 
alert(x); // 2 
*/
 

/* 4)
// [] + 1 + 2;

// console.log([] + 1 + 2);     //12    // I thought that it will be "3" but no, it's "12"
*/


/* 5) 
alert( "1"[0] ); // 1       // because [0] it's 0 index
alert( "vasya"[0] ) // v     // because v had index 0
*/


/* 6) 
// 2 && 1 && null && 0 && undefined;
console.log(2 && 1 && null && 0 && undefined); // browser read this code from left ot right, and operator "&&" mean that if 2 is true &&(and) if 1 is true and so on.. 
                                               // but if browser find "false", it will be problem. In this case null is nothing and === "false"
                                               // (&&(і) запинається на брехні а ||(або) на правді)
                                               // that's why result is "null"
*/


/* 7) 

// console.log( !!(1 && 2) === (1 && 2) ); // false // not the same, because if we see "!!" before smth, it make boolean. 1 && 2 just a numbers but with "!!" it's boolean(true/false)

*/


/* 8) !! (2 && 3) === (2 && 3)? //no

// ...2 && 3... mean that always return last value // in this case 3 // 

// alert( null || 2 && 3 || 4); // 3 // "&&" is more priority then "||" // (just search in internet "приорітети в js" and so on) //
// alert( undefined || 2 && "vasya" || 4); // vasya // важлива річ: "||" запинається на "правді" і як тільки він дійшов до значення з "true" то він далі не читає код бо немає потреби // (так само тільки навпки з "&&", як тільки  знаходить "брехню" то перестає читати код далі) //

*/


/* 9) it's true that a === b? //no // це дві окремі коробки з інформацією і не має значення те що в них вона однакова   

// якби там було const a = []; then const b = a; от тоді це було б одне і те ж 


const a = [1, 2, 3];
const b = [1, 2, 3]; 

console.log(a);  // [1, 2, 3] not the same
console.log(b); // [1, 2, 3] not the same

console.log(a == b); // false

*/


/* 10) result?

alert( +"Infinity" ) // Infinity but if i type "vasya" or smth result: "NaN"

*/


/* 11) true or false ("Ёжик" > "яблоко") 
//check UNICODE in google search

console.log("яблоко" > "Ёжик"); // true
console.log("Ёжик" > "яблоко"); // false

*/


/* 12) result?: ( 0 || "" || 2 || undefined || true || false )

console.log( 0 || "" || 2 || undefined || true || false ); // 2

*/




/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



















// Динамическая типизация в JS (26) //    всі дані які ми отримуємо від юзера це тип данних string!!!    //

// To string
// 1)
/* 
let vasya = 25;
console.log(typeof(String(vasya))); // string
console.log(typeof(vasya)); // number
console.log(String(vasya)); // 25 // the same like <console.log(vasya);> //  
*/

// 2)
/* console.log(typeof(5 + '')); // string // со вложением со строкой у нас всегда получаеться строка //
const num = 5;
console.log("https://vk.com/catalog/" + num);

const fontSize = 25 + 'px';

// To number
// 1)

console.log(typeof(Number('4')));
// or 2)

console.log(typeof(+'5'));

// 3)

console.log(typeof(parseInt("15px", 10)));

const answ = +prompt("Hello", "");


// To boolean

/*false: 0, '', null, undefined, NaN;*/ // other things will be true //

// example 1) // the most used
/*
let switcher = null;

function switchers() {
    if (switcher) {
        console.log("Working ...");
    }
}
switchers();

switcher = 1;

switchers();

// example 2)
console.log(typeof(Boolean('4'))); // boolean // usually not used

// example 3)

console.log(typeof(!!"44444")); // also boolean // but this method rarely used
*/
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





















// Основы ООП, прототипно-ориентированное наследование //
// Array prototype //

/* const soldiers = {
    health: 400,
    armor: 100,
    sayHi: function() {
        console.log("Hello");
    }
}; */

// 3 methods make prototype //
// 1 the best //
/* const john = Object.create(soldiers); */
//

// 2 //
// Object.setPrototypeOf(john, soldiers); // use this //
//

// 3 bad //
    /* john.__proto__ = soldiers; */ // it's very old method, not usually use ^^ here alternative ^^//
//

/* const john = {
    health: 200
}; */ // in programming we don't create things like that, we made things like these ^^ //

// john.sayHi();

// console.log(john);
// console.log(john.armor);


























// SPREAD operator ES6 - ES9 //////////  COPY  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/* const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'livejournal', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'facebook'];

console.log(internet); */ // the best thing '...' and then name of const //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];

log(...num); */ 

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* 
const array = ["a", "b"];
const newArray = [...array];
newArray[0] = "c";

console.log(newArray);
console.log(array); */ // how copy without slice(); //

/// what about objects? just make the same thing that you did with arrayes //

/* const q = {
    one: 1,
    two: 2
};

const newQ = {...q}; */ // that's it) //


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////




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

/* function copy(mainObj) {
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
newNumbers.a = 10; */


// console.log(newNumbers);
// console.log(numbers);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///// 
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* const add = {
    vasya: 1,
    what: 10
};

// console.log(Object.assign(numbers, add)); // на першому місці куда закидувати об'єкт а на другому який закидувати //
const clone = (Object.assign({}, add));
clone.vasya = 10;

// console.log(add);
// console.log(clone); */

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////now let's talk about copy arrayes /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/* const oldArray = ['a', 'b', 'c'];
const newArrey = oldArray.slice();  // also you can do this: const newArrey = [...oldArray];

newArrey[1] = 'vasya&vasya';

console.log(oldArray);
console.log(newArrey); */





























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