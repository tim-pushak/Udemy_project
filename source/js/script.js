"use strict";

const numberOfFilms = +prompt('Скільки фільмів ви вже подивились?', '');

const personalMovieDb = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


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





if (personalMovieDb.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDb.count > 10 && personalMovieDb.count < 30) { // or  10 <= personalMovieDb.count < 30
    console.log("Вы классический зритель");
} else if (personalMovieDb.count >= 30) {
    console.log("Вы киноман");
} else {
    console.log("Произошла ошибка");
}

console.log(personalMovieDb);











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