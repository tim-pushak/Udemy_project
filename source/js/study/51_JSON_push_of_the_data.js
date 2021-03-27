"use strict";




// (51) json format a push of the data

const persone = {
    name: 'Alex',
    tel: '8 800 355 35 35',
    parents: {
        mum: 'Olga',
        dad: 'Mike'
    }
};

// console.log(JSON.stringify(persone));
// console.log(JSON.parse(JSON.stringify(persone)));

const clone = JSON.parse(JSON.stringify(persone));
clone.parents.mum = 'Ann';

console.log(persone);
console.log(clone);