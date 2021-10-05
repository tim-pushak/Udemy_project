"use strict";

// 59 async/await getting data from server

// async ніколи не може бути без await запущене. 

const postData = async (url, data) => {
    const res = await fetch(url, {
        method: "POST",
        headers: {
            'Content-type': 'application-json'
        },
        body: data
    });

    return await res.json();
};


// щоб перебрати об'єкт треба спочатку (1)файл який збирає дані з форми (2)перетворити в масив масивів за допомогою entries, тоді взяти і (3)перетворити його в об'єкт і тоді (4)вже в json файл.
const obj = {a:2, b:50};
console.log(Object.entries(obj));

const formData = new FormData(form);
        //(1)//
const json = JSON.stringify(Object.fromEntries(formData.entries()));
            //(4)//          //(3)//                  //(2)//

