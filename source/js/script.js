"use strict";




let numberOfFilms;

function start() {
    numberOfFilms = prompt('Скільки фільмів ви вже подивились?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Скільки фільмів ви вже подивились?', '');
    }
}

start();







const personalMovieDb = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};







function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Який останній фільм ви бачили?', ''),
            b = prompt('У скільки його оціните?', '');

        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDb.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
}

rememberMyFilms();







function detectPersonalLevel() {
    if (personalMovieDb.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDb.count > 10 && personalMovieDb.count < 30) { // or  10 <= personalMovieDb.count < 30
        console.log("Вы классический зритель");
    } else if (personalMovieDb.count >= 30) {
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }
}

detectPersonalLevel();








function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDb);
    }
}

showMyDB(personalMovieDb.privat);





console.log(personalMovieDb);






function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        //don`t forget that you can type code like this and it will be works
        /* personalMovieDb.genres[i - 1] = prompt(`Ваш любимий жанр под номером ${i}`); */
        
        // but this code is the most understandble
        const yourGenres = prompt(`Ваш любимий жанр под номером ${i}`);

        personalMovieDb.genres[i - 1] = yourGenres; // -1 because user don`t know that in js first number is 0, that`s why on the top i type (let i = 1; i <= 3; i++)
        


        // i write down "if", because it`s easy to use 
        if (yourGenres != null && yourGenres != '' && yourGenres.length < 50) {
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
}

writeYourGenres();























// OBJECTS //

/* const options = {
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

console.log(border); */

// console.log(Object.keys(options).length); //important thing and most useble in js


/* console.log(options.name);

delete options.name;

console.log(options); */



/* console.log(options["colors"]["border"]); */ // it works but don`t practic and cool in usability


/*
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

console.log(counter); */



// MY PERSONAL OBJECT LIKE ^^ //

/* 
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


console.log(features); */




// CALLBACK FUNCTION //

/* 
function learnJS(lang, callback) {
    console.log(`Я вчу ${lang}!`);
    callback();
}

function done() {
    console.log('done');
}

learnJS('JavaScript', done); // now i type function 'done' without "()" ( like: "done();" ), because this function will be come to "callback(here)" in first function "learnJS" //
 */













//OR//

// let i = 0;

// while (i < 2) {
//     const a = prompt('Який останній фільм ви бачили?', ''),
//           b = prompt('У скільки його оціните?', '');

//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDb.movies[a] = b;
//         console.log('done');
//         i++;
//     } else {
//         console.log('error');
//         i--;
//     }
// }

//OR//

// let i = 0;

// do {
//     const a = prompt('Який останній фільм ви бачили?', ''),
//           b = prompt('У скільки його оціните?', '');

//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDb.movies[a] = b;
//         console.log('done');
//         i++;
//     } else {
//         console.log('error');
//         i--;
//     }
// }
// while (i < 2);















//Цикли

//1///

/* let num = 50;

while (num <= 55) {
    console.log(num);
    num++;
} */

//2///

/* let num = 50;

do {
    console.log(num);
    num++;
}
while (num <= 55);
 */

//3 more useble and famous///
//1 step//

/* for (let i = 1; i < 8; i++) {
    console.log(i);
} */

//2 step//

/* let num = 50;
for (let i = 1; i < 8; i++) {
    console.log(num);
    num++;
} */

//3 step//

/* for (let i = 1; i < 10; i++) {
    if (i === 6) {
        // break;
        continue;
    }

    console.log(i);
} */