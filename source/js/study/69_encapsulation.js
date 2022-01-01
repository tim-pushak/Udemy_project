"use strict";

// 69 Encapsulation
 
// function User(name, age) {
//     this.name = "Ivan";
//     let userAge = 27;

//     this.say = function() {
//         console.log(`Name of user: ${this.name}, age of user: ${userAge}`);
//     }

//     this.getAge = function() {
//         return userAge;
//     }

//     this.setAge = function(age) {
//         if(typeof age === 'number' && age > 0 && age < 110) {
//             userAge = age;
//         } else {
//             console.log("Something went wrong");
//         }
//     } 
// }

// const ivan = new User('Ivan', 27);
// console.log(ivan.name);
// console.log(ivan.getAge());

// ivan.setAge(35);
// ivan.setAge(350);
// console.log(ivan.getAge());

// ivan.say();








class User {
    constructor(name, age) {
        this.name = name;
        this._age = age;
    }

    say() {
        console.log(`Name of user: ${this.name}, age of user ${this._age}`);
    }

    get age() {
        return this._age;
    }

    set age(age) {
        if (typeof age === 'number' && age > 0 && age < 110) {
            this._age = age;
        } else {
            console.log('Smth went wrong');
        }
    }
}

const ivan = new User('Vasya', 30);

console.log(ivan._age);
ivan.age = 99;
console.log(ivan._age);

ivan.say();