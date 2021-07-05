'use strict';


// (52) Ajax & server

// XMLHttpRequest()  
// 'readystatechange', () => {};

const inputRub = document.querySelector('#rub'),
      inputUsd = document.querySelector('#usd');

inputRub.addEventListener('input', () => {
    const request = new XMLHttpRequest();


    /* request.open('method', 'url', 'async', 'login', 'password'); */
    request.open('GET', 'js/current.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();

    request.addEventListener('load', () => {
        if (request.status === 200) {
            console.log(request.response);
            const data = JSON.parse(request.response);
            inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
        } else {
            inputUsd.value = "Smth went wrong";
        }
    
    }); // відслідковує поточний стан запиту, (4 - readyState - done), (200 - status)


    //status (error 404 and so on check it in wikipedia)
    //statusText (ok, not found (404 ERROR))
    //response (відповідь, відповідь від сервера)
    //readyState (поточний стан запиту, позначається цифрою)
});
