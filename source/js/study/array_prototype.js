"use strict";

// Основы ООП, прототипно-ориентированное наследование //
// Array prototype //

const soldiers = {
    health: 400,
    armor: 100,
    sayHi: function() {
        console.log("Hello");
    }
};

// 3 methods make prototype //
// 1 the best //
const john = Object.create(soldiers);
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

john.sayHi();

// console.log(john);
// console.log(john.armor);
