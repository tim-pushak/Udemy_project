"use strict";

// 59 async/await getting data from server

// async ніколи не може бути без await запущене. 

// const postData = async (url, data) => {
//     const res = await fetch(url, {
//         method: "POST",
//         headers: {
//             'Content-type': 'application-json'
//         },
//         body: data
//     });

//     return await res.json();
// };


// 58 npm json-server

// fetch('http://localhost:3000/menu') // db.json (для того щоб зайти посилання в терміналі "npx json-server db.json")
//         .then(data => data.json())
//         .then(res => console.log(res));

// install npm "npm init"
// install npm package locally for developer "npm i "name of package" --save-dev" 
// install npm package locally "npm i "name of package" --save" 
// install npm package globally "npm i "name of package" -g --save"

// show db.information "npx json-server db.json" 




// 57 Ways to find massives

// .filter
// .map
// .some() / every()
// .reduce()


// filter()
/* const names = ['Ivan', 'Ann', 'Valdemart', 'Ksenia'];

const shortNames = names.filter(function(name) {
    return name.length > 5;
});

console.log(shortNames);


// map()
const answers = ['IvAn', 'AnnA', 'Hello'];

const result = answers.map(item => item.toLocaleLowerCase());
console.log(result);


//some/every
const some = [4, 'tesf', 'tsegaehrea'];

console.log(some.some(item => typeof(item) === 'number')); // важливе правило... якщо немає {} значить return підставляється автоматично. 
console.log(some.every(item => typeof(item) === 'number'));


// reduce()

/* const arr = [4, 5, 6, 7, 3, 10, 15];
const res = arr.reduce((sum, current) => sum + current);
console.log(res); 

const arr = ['apple', 'plum', 'cucumber'];
const res = arr.reduce((sum, current) => `${sum}, ${current}`); // or sum + ', ' + current;
console.log(res); */



// (55) Promises

// const req = new Promise (resolve, reject => {

//});

// req.then - resolve
// req.catch - reject

// req.finally - наприклад може бути не важливо чи коректно надіслалась форма на сервер але шо так шо так всерівно треба очистити форму, тому для цього є finally - console.log('clear') and so on ...
/* 
Promise.all([]);
Promise.race([]);
 - "all" will done when everything is done, "race" will done when "first argument" will done */



// (52) Ajax & server

// XMLHttpRequest()  
// 'readystatechange', () => {};

/* const inputRub = document.querySelector('#rub'),
      inputUsd = document.querySelector('#usd');

inputRub.addEventListener('input', () => {
    const request = new XMLHttpRequest();


    /* request.open('method', 'url', 'async', 'login', 'password'); */
    /* request.open('GET', 'js/current.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();

    request.addEventListener('load', () => {
        if (request.status === 200) {
            console.log(request.response);
            const data = JSON.parse(request.response);
            inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
        } else {
            inputUsd.value = "Smth went wrong";
        }
    
    }); // відслідковує поточний стан запиту, (4 - readyState - done), (200 - status)
 */

    //status (error 404 and so on check it in wikipedia)
    //statusText (ok, not found (404 ERROR))
    //response (відповідь, відповідь від сервера)
 /*    //readyState (поточний стан запиту, позначається цифрою)
}); */


                            /* const inputRub = document.querySelector('#rub'),
                                inputUsd = document.querySelector('#usd');

                            inputRub.addEventListener('input', () => {
                                const request = new XMLHttpRequest();

                                request.open('GET', 'js/current.json');
                                request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
                                request.send();

                                request.addEventListener('load', () => {
                                    if (request.status === 200) {
                                        console.log(request.response);
                                        const data = JSON.parse(request.response);
                                        inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
                                    } else {
                                        inputUsd.value = "smth went wrong (";
                                    }
                                });
                            }); */













// (51) json format a push of the data

/* const persone = {
    name: 'Alex',
    tel: '8 800 355 35 35',
    parents: {
        mum: 'Olga',
        dad: 'Mike'
    }
}; */

// console.log(JSON.stringify(persone));
// console.log(JSON.parse(JSON.stringify(persone)));

/* const clone = JSON.parse(JSON.stringify(persone));
clone.parents.mum = 'Ann';

console.log(persone);
console.log(clone); */



// (50) it's about servers (mamp)


// (49) ...rest operator

/* const log = function (a, b, ...rest) {
    console.log(a, b, rest);
}

log('basic', 'rest', 'operator', 'usage');
log('basic', 'rest', 'олмтвы', 'мфынф'); */


// other code in big project


// spread
// const logg = {
//     q: 1,
//     w: 2
// }

// const newLogg = {
//     ...logg,
//     bL: 23
// }

// console.log(logg);
// console.log(newLogg);




// (47) Classes ES6

/* class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    calcArea() {
        return this.height * this.width;
    }
}

class ColoredRectabgleWithText extends Rectangle {
    constructor(height, width, text, bgColor) {
        super(height, width);
        this.text = text;
        this.bgColor = bgColor;
    }

    showMyProps() {
        console.log(`Text: ${this.text}, color: ${this.bgColor}`);
    }
} */

/* const div = new ColoredRectabgleWithText(10, 30, 'Hello World', 'red');
div.showMyProps();

console.log(div.calcArea());
 */
/* 
const square = new Rectangle(10, 10);
const newSquare = new Rectangle(20, 100);


console.log(square.calcArea());
console.log(newSquare.calcArea());
 */



// (46) Imoprtant 'this.'
// bind()
// this.



/* function showThis(a, b) {
    console.log(this);

    function sum() {
        console.log(this);
        return a + b;
    }

    console.log(sum());
} 

showThis(4, 5); */





/* const obj = {
    a: 20,
    b: 15,
    sum: function() {
        function shout() {
            console.log(this);
        }
        shout();
    }
};

obj.sum(); */




/* function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function() {
        console.log("Hello" + this.name);
    };
}

let ivan = new User('Ivan', 23); */


/* function sayName(surname) {
    console.log(this);
    console.log(this.name + surname);
    console.log(this.age);
}

const user = {
    name: 'John ',
    age: 27,
    week: 100
};
 */
/* // call is the same as apply
sayName.call(user, 'Smith');
sayName.apply(user, ['Smith']); 
// differense only on the syntax */



/* function count(num) {
    return this*num;
}

const double = count.bind(2);
console.log(double(3));
console.log(double(13)); */



// 1) звичайна функція: this - window(without 'use strict'), але якщо 'use strict' - undefined
// 2) контекст уу методів об'єкта - це і є сам об'єкт
// 3) this в конструкторах і класах - це новий екземпляр об'єкту !!!!!!!! important !!!!!!!!
// 4) ручна прив'язка this: call(), apply(), bind()


/* const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    // console.log(this);
    // this.style.backgroundColor = 'red'; // it works here only with 'function()' 
    e.target.style.backgroundColor = 'red'; // e.target the same as this.
}); */


/* const obj = {
    num: 5,
    sayNumber: function() {
        const say = () => {
            console.log(this);
            console.log(this.num);
        };

        say();
    }
}

obj.sayNumber(); */



/* const double = (a) => {
   return a * 2;
};
// the same
const doublee = a => a * 2;

console.log(double(4, 10));
console.log(doublee(4)); */













// // (45) Functions-constructions 

// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function() {
//         console.log(`Hello, ${this.name}`);
//     };
// }

// User.prototype.exit = function() {
//     console.log(`The user ${this.name}, leave meeting`);
// };

// const ivan = new User('Ivan', 28);
// const alex = new User('Alex', 20);

// ivan.hello();
// alex.hello();

// ivan.exit();

// console.log(ivan, alex);



// (42) Settings of document, window, and work with it 

// offset (offsetLeft, offsetTop), (offsetWidth, offsetHeight);

// client (clientLeft, clientTop), (clientWidth, clientHeight);

// scroll (scrollTop), (scrollHeight);

// scrollBy(somenumeber) від поточного положення переміщує and scrollTo(somenumber) переміщує відносно всієї сторінки 


// const example = document.querySelector('.example');

// const width = example.scrollWidth;
// const height = example.scrollHeight;

// console.log(width, height);

// console.log(example.getBoundingClientRect()); // так можна отримати точні координати елемента

// //
// const exampleToo = document.querySelector('.exampleToo');

// exampleToo.addEventListener('click', () => {
//    exampleToo.style.height =exampleToo.scrollHeight + 'px';

//     console.log(exampleToo.scrollTop);
// });

// /// get styles

// const style = window.getComputedStyle(example);

// console.log(style.display);

// console.log(document.documentElement.scrollTop); // скільки пх юзер вже прогорнув

/////////////////////////

// (40) Dates

// всі дати в js по замовчуванню в мілі секундах і їх є два типи SET and GET
// const now = new Date();


// GET
// console.log(now);
// console.log(now.getFullYear());
// console.log(now.getMonth());

// console.log(now.getDate());
// console.log(now.getDay()); // number day of week

// console.log(now.getHours()); 
// console.log(now.getUTCHours()); 

// console.log(now.getTimezoneOffset()); // difference between my time zone and UTC but in minutes
// console.log(now.getTime()); // кількість мілісекунд які пройшли з 1970 року (бо початок цієї всієї каші з 1970 року)



// SET (решта методів такі самі як і в get)
// console.log(now.setHours(18)); // консоль вс коду відштовхується від UTC тому результат не буде 18, але в браузері все буде ок 
// console.log(now.setHours(год, хв, секунди));
// console.log(now);




////// внизу пише цикл який показує за скільки часу він відробив
/* let start = new Date();

for (let i = 0; i < 10000000; i++) {
    let some = i ** 3;
}

let end = new Date();

alert(`It works for the ${end - start} ms`); */


////////////////////////////////

// (39) setTimeout & setInterval

// різниця між ними така що setInterval, якщо ти поставиш йому 1с інервал то навіть якщо та функція дуже багато важить і це займає 1с або більше, то на друге повторення він не буде виконувати ту 1с яку написано. Тобто в любому випадку буде 1с але це може завлежати від ваги функції або того інтервалу який є задано //
// якщо говорити про setTimeout, то він ні під кого не підстроюється. виконує строго те що пише і + той час який потрібен для виконання великої функції //



// const btn = document.querySelector('.btn');
// let timerId,
//     i = 0;

// btn.addEventListener('click', () => {
//     // const timerId = setTimeout(logger, 2000);
//     timerId = setInterval(logger, 2000);
// });


// function logger () {
//     if (i === 3) {
//         clearInterval(timerId);
//     }

//     console.log('Hello');
//     i++;
// }




// but else another methods

// const timerId = setTimeout(function() {
//     console.log('Hello');
// }, 2000);
// //or
// const timerId = setTimeout(function(text) {
//     console.log(text);
// }, 2000, 'Hello');




// animation

/* const bttn = document.querySelector('.bttn');

function myAnimation() {
    const elem = document.querySelector('.boxDiv');
    let pos = 0;

    const id = setInterval(frame, 10);
    function frame() {
        if (pos == 300) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + "px";
            elem.style.left = pos + 'px';
        }
    }
}

bttn.addEventListener('click', myAnimation); */



///////////////////////

// (38) big_project

///////////////////////

// (37) dynamic classList and events

// classList and item()
// add(), remove() 
// toggle() - він додає елемент якщо його немає або видаляє якщо він є
// contains

// const btns = document.querySelectorAll('button'),
//       wrappers = document.querySelector('.obolonka');

// // console.log(btns[0].classList.item(0));
// // console.log(btns[0].classList.add('red'));
// // console.log(btns[0].classList.remove('vasya'));
// // console.log(btns[0].classList.toggle('ivan'));

// // if (btns[0].classList.contains('red')) {
// //     console.log('true');
// // } else {
// //     console.log('false');
// // }


// btns[0].addEventListener('click', () => {
//     if (!btns[1].classList.contains('red')) {
//         btns[1].classList.add('red');
//     } else {
//         btns[1].classList.remove('red');
//     }

//     // or but not understandble
//     // btns[1].classList.toggle('red');
// }); 

// // className is not useble !!!

// wrappers.addEventListener('click', (event) => {
//     // console.log(event.target);
//     if (event.target && event.target.tagName == 'BUTTON') {
//         console.log('Hello');
//     }
// });


// const btn = document.createElement('button');
// btn.classList.add('blue');
// wrappers.append(btn);
// btn.textContent = '7';



////////////////////////////////////

// (35) Async & Defer in Scripts

// Якщо поставити простий скрипт на початок сторінки то, як тільки до нього дійде черга то він почне загружатись
// і буде блокувати те що робиться внизу, тобто ціле дом дерево. 
// Але якщо написати (<script DEFER or ASYNC src="vasya/js"></script>), то ці скрипти будуть загружатись в фоновому режимі і не будуть мішати верстці загружатись далі.

// Різниця між Async & Defer 

// Async - загружається в фоновому режимі, але не чекає на інші скрипти, і таким чином стає ніби незалежним скриптом
// Defer - теж загружається в фоновому режимі але по черзі, тобто інший скрипт з Defer не загрузиться поки не загрузився попередній скрипт з Defer




// 3 спосіб як можна додати скрипт на сторінку // і цей метод по замовчуванню веде себе як async

// const script = document.createElement('script');
// script.src = "js/study/mobile_events_34.js";
// script.async = false; // щоб відмінти цю поведінку яка стоїть по замовчуванню
// document.body.append(script);

// or

// function loadScript (src) {
//     const script = document.createElement('script');
//     script.src = src;
//     script.async = false; // щоб відмінти цю поведінку яка стоїть по замовчуванню
//     document.body.append(script);

// }

// loadScript("js/study/mobile_events_34.js");
// loadScript("js/study/arrayes.js");  



// (34) Events on Smartphones

//6

// touchstart
// touchmove
// touchend
// touchenter
// touchleave
// touchcancel

// та велика обгортка (window.addEve....) треба для того щоб ми точно знали що dom tree готове

// window.addEventListener('DOMContentLoaded', () => {
//     const box = document.querySelector('.box');

//     box.addEventListener('touchstart', (e) => { // коли людина доторкнулась
//         e.preventDefault(); //радиться писати цю строчку по замовчуванню кожен раз

//         console.log('Start');
//         // console.log(e.touches);
//         // console.log(e.targetTouches);
//         // console.log(e.changedTouches);
//     });

//     box.addEventListener('touchmove', (e) => { // коли натиснула, тримає і водить по екрану
//         e.preventDefault(); //радиться писати цю строчку по замовчуванню кожен раз

//         console.log('Move');
//     });

//     box.addEventListener('touchend', (e) => { // момент коли користувач відпустив палець
//         e.preventDefault(); //радиться писати цю строчку по замовчуванню кожен раз

//         console.log('End');
//     });
// }); 

// touches - дає список загальної кількості пальців, які зараз взаємодіють з екраном (коли людина натиснула і тримає)
// targetTouches - дає список загальної кількості пальців, які зараз взаємодіють з конкретним елементом на сторінці (коли людина натиснула і тримає)
// changedTouches - список загальної пальців, які зараз приймають участь в поточній події (виведе палець який людина забрала з екрану, навіть якщо ще 4 пальці залишилися)





////////////////////////////////////////////////////////////////////////////////////////////////

// (33) practive with web-site

// (32) Navigation DOM

//////////////
// console.log(document.head); 
// console.log(document.documentElement);               // <html></html>





/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// console.log(document.body.childNodes);               // виводить в консоль всіх дітей body

//or

/// if I wanna nodes without text but only with ELEMENTS
// for (let node of document.body.childNodes) {
//     if (node.nodeName == '#text') {
//         continue;
//     }

//     console.log(node);
// }
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////








///////////////
// console.log(document.body.firstChild);               // just first value
// console.log(document.body.firstElementChild);        // exactly first element



//////////////// 
// console.log(document.body.lastChild);                // just last value
// console.log(document.body.lastElementChild);         // exactly last element







/////////////////
// console.log(document.querySelector('#current').parentNode.parentNode);               // you can type 'parent.Node' more and more time ...
//or
// console.log(document.querySelector('#current').parentElement);                          // the same like previous but more exactly
///////////////







////////////
// console.log(document.querySelector('[data-current]').previousSibling);                  // previous VALUE
// console.log(document.querySelector('[data-current]').nextSibling);                      // next VALUE

// console.log(document.querySelector('[data-current]').previousElementSibling);           // previous ELEMENT
// console.log(document.querySelector('[data-current]').nextElementSibling);               // next ELEMENT


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




/*
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
}); */





// 30 in practice folder

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