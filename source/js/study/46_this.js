// "use strict";


// (46) Imoprtant 'this.'
// bind()
// this.



/* function showThis(a, b) {
    console.log(this);

    function sum() {
        console.log(this);
        return a + b;
    }

    console.log(sum());
} 

showThis(4, 5); */





/* const obj = {
    a: 20,
    b: 15,
    sum: function() {
        function shout() {
            console.log(this);
        }
        shout();
    }
};

obj.sum(); */




/* function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function() {
        console.log("Hello" + this.name);
    };
}

let ivan = new User('Ivan', 23); */


/* function sayName(surname) {
    console.log(this);
    console.log(this.name + surname);
    console.log(this.age);
}

const user = {
    name: 'John ',
    age: 27,
    week: 100
};
 */
/* // call is the same as apply
sayName.call(user, 'Smith');
sayName.apply(user, ['Smith']); 
// differense only on the syntax */



/* function count(num) {
    return this*num;
}

const double = count.bind(2);
console.log(double(3));
console.log(double(13)); */



// 1) звичайна функція: this - window(without 'use strict'), але якщо 'use strict' - undefined
// 2) контекст уу методів об'єкта - це і є сам об'єкт
// 3) this в конструкторах і класах - це новий екземпляр об'єкту !!!!!!!! important !!!!!!!!
// 4) ручна прив'язка this: call(), apply(), bind()


const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    // console.log(this);
    // this.style.backgroundColor = 'red'; // it works here only with 'function()' 
    e.target.style.backgroundColor = 'red'; // e.target the same as this.
});


/* const obj = {
    num: 5,
    sayNumber: function() {
        const say = () => {
            console.log(this);
            console.log(this.num);
        };

        say();
    }
}

obj.sayNumber(); */



const double = (a) => {
   return a * 2;
};
// the same
const doublee = a => a * 2;

console.log(double(4, 10));
console.log(doublee(4));
