"use strict";


// 57 Ways to find massives

// .filter
// .map
// .some() / every()
// .reduce()


// filter()
const names = ['Ivan', 'Ann', 'Valdemart', 'Ksenia'];

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
console.log(res); */

const arr = ['apple', 'plum', 'cucumber'];
const res = arr.reduce((sum, current) => `${sum}, ${current}`); // or sum + ', ' + current;
console.log(res);
