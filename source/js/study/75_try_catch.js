"use strict";

// 75 Mistakes

try {
    console.log("Normal");
    console.log(a);
    console.log("result");
} catch (error) {
    console.log(error);
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
} finally {
    //code will work anyway
}

console.log('still normal');