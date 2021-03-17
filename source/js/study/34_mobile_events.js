"use strict";

// (34) Events on Smartphones

//6

// touchstart
// touchmove
// touchend
// touchenter
// touchleave
// touchcancel

// та велика обгортка (window.addEve....) треба для того щоб ми точно знали що dom tree готове

window.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.box');

    box.addEventListener('touchstart', (e) => { // коли людина доторкнулась
        e.preventDefault(); //радиться писати цю строчку по замовчуванню кожен раз

        console.log('Start');
        // console.log(e.touches);
        // console.log(e.targetTouches);
        // console.log(e.changedTouches);
    });

    box.addEventListener('touchmove', (e) => { // коли натиснула, тримає і водить по екрану
        e.preventDefault(); //радиться писати цю строчку по замовчуванню кожен раз

        console.log('Move');
    });

    box.addEventListener('touchend', (e) => { // момент коли користувач відпустив палець
        e.preventDefault(); //радиться писати цю строчку по замовчуванню кожен раз

        console.log('End');
    });
}); 

// touches - дає список загальної кількості пальців, які зараз взаємодіють з екраном (коли людина натиснула і тримає)
// targetTouches - дає список загальної кількості пальців, які зараз взаємодіють з конкретним елементом на сторінці (коли людина натиснула і тримає)
// changedTouches - список загальної пальців, які зараз приймають участь в поточній події (виведе палець який людина забрала з екрану, навіть якщо ще 4 пальці залишилися)