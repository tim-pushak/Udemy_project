"use strict";




// (51) json format a push of the data

const persone = {
    name: 'Alex',
    tel: '8 800 355 35 35'
};

console.log(JSON.stringify(persone));
console.log(JSON.parse(JSON.stringify(persone)));