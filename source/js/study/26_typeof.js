"use strict";

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
console.log(typeof(5 + '')); // string // со вложением со строкой у нас всегда получаеться строка //
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