"use strict";



const personalMovieDb = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,

    start: function() {
        personalMovieDb.count = prompt('Скільки фільмів ви вже подивились?', '');
    
        while (personalMovieDb.count == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
            personalMovieDb.count = +prompt('Скільки фільмів ви вже подивились?', '');
        }
    }, 

    rememberMyFilms: function() {
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
    },

    detectPersonalLevel: function() {
        if (personalMovieDb.count < 10) {
            console.log("Просмотрено довольно мало фильмов");
        } else if (personalMovieDb.count > 10 && personalMovieDb.count < 30) { // or  10 <= personalMovieDb.count < 30
            console.log("Вы классический зритель");
        } else if (personalMovieDb.count >= 30) {
            console.log("Вы киноман");
        } else {
            console.log("Произошла ошибка");
        }
    },

    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDb);
        }
    },

    writeYourGenres: function() {
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
};





function toggleVisibleMyDB() {
    if(personalMovieDb.privat === true) {
        personalMovieDb.privat === false;
    } else if(personalMovieDb.privat === false) {
        personalMovieDb.privat === true;
    } else {
        console.log('error');
    }
};

toggleVisibleMyDB(personalMovieDb);









