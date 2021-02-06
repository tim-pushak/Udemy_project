'use strict';

// OBJECTS //

const options = {
    name: 'test', // "name: 'test'" - is method, "name" - is key or property, 'test' - is value
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() {
        console.log('test');
    }
}

options.makeTest(); 

const {border, bg} = options.colors; // destructuring code, the first thing, we type what do we want to get then type from what object we will do this

console.log(border); 

// console.log(Object.keys(options).length); //important thing and most useble in js


console.log(options.name);

delete options.name;

console.log(options); 



/* console.log(options["colors"]["border"]); */ // it works but don`t practic and cool in usability



let counter = 0;

for (let key in options) {
    if(typeof(options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`Property ${i} have value ${options[key][i]}`);
        }
    } else {
        console.log(`Property ${key} have value ${options[key]}`);
        counter++;
    }
};

console.log(counter); 



// MY PERSONAL OBJECT LIKE ^^ //


const features = {
    name: 'hello',
    age: 23,
    width: 1123,
    height: 1123,
    colors: {
        border: 'red',
        bg: 'blue'
    },
    makePlan: function() {
        let plan = 25;

        if(plan === 15) {
            let cool = 'oh men, it`s 15';
            console.log(cool);
        } else if(plan === 25) {
            let wow = 'not bad';
            console.log(wow);
        } else {
            let what = 'error bro';
            console.log(what);
        }
    }
}

features.makePlan();


console.log(features); 