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
