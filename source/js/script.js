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