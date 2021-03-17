"use strict";



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

const bttn = document.querySelector('.bttn');

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

bttn.addEventListener('click', myAnimation);


