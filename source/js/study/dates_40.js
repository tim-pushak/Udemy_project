"use strict";


// (40) Dates

// всі дати в js по замовчуванню в мілі секундах і їх є два типи SET and GET
const now = new Date();


// GET
console.log(now);
console.log(now.getFullYear());
console.log(now.getMonth());

console.log(now.getDate());
console.log(now.getDay()); // number day of week

console.log(now.getHours()); 
console.log(now.getUTCHours()); 

console.log(now.getTimezoneOffset()); // difference between my time zone and UTC but in minutes
console.log(now.getTime()); // кількість мілісекунд які пройшли з 1970 року (бо початок цієї всієї каші з 1970 року)



// SET (решта методів такі самі як і в get)
console.log(now.setHours(18)); // консоль вс коду відштовхується від UTC тому результат не буде 18, але в браузері все буде ок 
// console.log(now.setHours(год, хв, секунди));
console.log(now);




////// внизу пише цикл який показує за скільки часу він відробив
let start = new Date();

for (let i = 0; i < 10000000; i++) {
    let some = i ** 3;
}

let end = new Date();

alert(`It works for the ${end - start} ms`);
