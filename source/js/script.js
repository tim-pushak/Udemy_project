"use strict";



const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false, // до цієї 10 строчки це свойства а нижче йдуть не функції а методи //

    start: function() {
        personalMovieDB.count = prompt('Скільки фільмів ви вже подивились?', '');
    
        while (personalMovieDB.count == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
            personalMovieDB.count = +prompt('Скільки фільмів ви вже подивились?', '');
        }
    }, 

    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Який останній фільм ви бачили?', ''),
                b = prompt('У скільки його оціните?', '');
    
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log('done');
            } else {
                console.log('error');
                i--;
            }
        }
    },

    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) { // or  10 <= personalMovieDb.count < 30
            console.log("Вы классический зритель");
        } else if (personalMovieDB.count >= 30) {
            console.log("Вы киноман");
        } else {
            console.log("Произошла ошибка");
        }
    },

    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },

    

    toggleVisibleMyDB: function() {
        if(personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },

    writeYourGenres: function() {
        for (let i = 1; i <= 3; i++) {
            //don`t forget that you can type code like this and it will be works
            /* personalMovieDb.genres[i - 1] = prompt(`Ваш любимий жанр под номером ${i}`); */
            
            // but this code is the most understandble //
            let genre = prompt(`Ваш любимий жанр под номером ${i}`).toLowerCase(); //toLowerCase() it nice thing that you will be need, just do it almost every time //
    
            if (genre === '' || genre === null) {
                console.log('what are you doing man?');
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genre; // -1 because user don`t know that in js first number is 0, that`s why on the top i type (let i = 1; i <= 3; i++)
            }
        }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
    }
};