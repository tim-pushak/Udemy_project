"use strict";

// (35) Async & Defer in Scripts

// Якщо поставити простий скрипт на початок сторінки то, як тільки до нього дійде черга то він почне загружатись
// і буде блокувати те що робиться внизу, тобто ціле дом дерево. 
// Але якщо написати (<script DEFER or ASYNC src="vasya/js"></script>), то ці скрипти будуть загружатись в фоновому режимі і не будуть мішати верстці загружатись далі.

// Різниця між Async & Defer 

// Async - загружається в фоновому режимі, але не чекає на інші скрипти, і таким чином стає ніби незалежним скриптом
// Defer - теж загружається в фоновому режимі але по черзі, тобто інший скрипт з Defer не загрузиться поки не загрузився попередній скрипт з Defer




// 3 спосіб як можна додати скрипт на сторінку // і цей метод по замовчуванню веде себе як async

// const script = document.createElement('script');
// script.src = "js/study/mobile_events_34.js";
// script.async = false; // щоб відмінти цю поведінку яка стоїть по замовчуванню
// document.body.append(script);

// or

function loadScript (src) {
    const script = document.createElement('script');
    script.src = src;
    script.async = false; // щоб відмінти цю поведінку яка стоїть по замовчуванню
    document.body.append(script);

}

loadScript("js/study/mobile_events_34.js");
loadScript("js/study/arrayes.js");  

