"use strict";


// (49) ...rest operator

const log = function (a, b, ...rest) {
    console.log(a, b, rest);
}

log('basic', 'rest', 'operator', 'usage');
log('basic', 'rest', 'олмтвы', 'мфынф');


// other code in big project


// spread
// const logg = {
//     q: 1,
//     w: 2
// }

// const newLogg = {
//     ...logg,
//     bL: 23
// }

// console.log(logg);
// console.log(newLogg);
