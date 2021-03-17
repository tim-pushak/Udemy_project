"use strict";


// (45) Functions-constructions 

function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function() {
        console.log(`Hello, ${this.name}`);
    };
}

User.prototype.exit = function() {
    console.log(`The user ${this.name}, leave meeting`);
};

const ivan = new User('Ivan', 28);
const alex = new User('Alex', 20);

ivan.hello();
alex.hello();

ivan.exit();

console.log(ivan, alex);
