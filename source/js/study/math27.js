"use strict";

// Math examples (lesson 27)




// 1)

let x = 5;
alert( x++ ); // 5 but if i do this way ( ++x ) it will be 6;


// 2)
//[] + false + null + true;

console.log([] + false + null + true);           // result NaN ([] + false = "false" (string)) and ([] + false + null = NaN) and, + true = NaN;


// 3)

let y = 1;
let x = y = 2; // note that, this code you must read from right to left 
alert(x); // 2 

 

// 4)
// [] + 1 + 2;

console.log([] + 1 + 2);     //12    // I thought that it will be "3" but no, it's "12"



// 5) 

alert( "1"[0] ); // 1       // because [0] it's 0 index
alert( "vasya"[0] ) // v     // because v had index 0



// 6) 
// 2 && 1 && null && 0 && undefined;

console.log(2 && 1 && null && 0 && undefined); // browser read this code from left ot right, and operator "&&" mean that if 2 is true &&(and) if 1 is true and so on.. 
                                               // but if browser find "false", it will be problem. In this case null is nothing and === "false"
                                               // (&&(і) запинається на брехні а ||(або) на правді)
                                               // that's why result is "null"



// 7) 

console.log( !!(1 && 2) === (1 && 2) ); // false // not the same, because if we see "!!" before smth, it make boolean. 1 && 2 just a numbers but with "!!" it's boolean(true/false)




// 8) !! (2 && 3) === (2 && 3)? //no

// ...2 && 3... mean that always return last value // in this case 3 //

alert( null || 2 && 3 || 4); // 3 // "&&" is more priority then "||" // (just search in internet "приорітети в js" and so on) //
alert( undefined || 2 && "vasya" || 4); // vasya // важлива річ: "||" запинається на "правді" і як тільки він дійшов до значення з "true" то він далі не читає код бо немає потреби // (так само тільки навпки з "&&", як тільки  знаходить "брехню" то перестає читати код далі) //



// 9) it's true that a === b? //no // це дві окремі коробки з інформацією і не має значення те що в них вона однакова   

// якби там було const a = []; then const b = a; от тоді це було б одне і те ж 


const a = [1, 2, 3];
const b = [1, 2, 3]; 

console.log(a);  // [1, 2, 3] not the same
console.log(b); // [1, 2, 3] not the same

console.log(a == b); // false



// 10) result?

alert( +"Infinity" ) // Infinity but if i type "vasya" or smth result: "NaN"



// 11) true or false ("Ёжик" > "яблоко") 
//check UNICODE in google search

console.log("яблоко" > "Ёжик"); // true
console.log("Ёжик" > "яблоко"); // false



// 12) result?: ( 0 || "" || 2 || undefined || true || false )

console.log( 0 || "" || 2 || undefined || true || false ); // 2






/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


