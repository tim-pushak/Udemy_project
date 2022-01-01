"use strict";

// 70 Modules and privat information

const user = (function(){
    const privat = function() {
        console.log('I am a privat');
    }

    return {
        sayHello: privat
    };
}())

user.sayHello();