'use strict';

//ARRAYES (масиви) //

const arr = [1, 33, 24, 5, 8];

arr.sort(compareNum);

function compareNum(a, b) {
    return a - b;
}

console.log(arr); 


// arr.pop();
// arr.push(10); 



arr[99] = 0;
console.log(arr.length);
console.log(arr);



// щоб перебрати масив //
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
//

// або так //
for (let value of arr) {
    console.log(value);
}
// 


// або так  але можна більш точніше насторїти because it`s callback function //

// arr.forEach(function (item, i, arr) {
//     console.log(`${i}: ${item} inside array ${arr}`);
// });

///////////////////////////////////////////////////////////

const str = prompt("what?", "");
const products = str.split(", ");
products.sort();
console.log(products.join("; ")); 