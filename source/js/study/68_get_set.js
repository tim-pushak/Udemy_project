"use strict";

// 68 GETets and SETers

const persone = {
    name: "Vasya",
    age: 25,

    get userAge() {
        return this.age;
    },

    set userAge(num) {
        this.age = num;
    }
}

console.log(persone.userAge = 30);
console.log(persone.userAge);