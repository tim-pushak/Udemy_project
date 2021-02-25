"use strict";

// (32) Navigation DOM

//////////////
// console.log(document.head); 
// console.log(document.documentElement);               // <html></html>





/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// console.log(document.body.childNodes);               // виводить в консоль всіх дітей body

//or

/// if I wanna nodes without text but only with ELEMENTS
for (let node of document.body.childNodes) {
    if (node.nodeName == '#text') {
        continue;
    }

    console.log(node);
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////








///////////////
// console.log(document.body.firstChild);               // just first value
// console.log(document.body.firstElementChild);        // exactly first element



//////////////// 
// console.log(document.body.lastChild);                // just last value
// console.log(document.body.lastElementChild);         // exactly last element







/////////////////
// console.log(document.querySelector('#current').parentNode.parentNode);               // you can type 'parent.Node' more and more time ...
//or
// console.log(document.querySelector('#current').parentElement);                          // the same like previous but more exactly
///////////////







////////////
// console.log(document.querySelector('[data-current]').previousSibling);                  // previous VALUE
// console.log(document.querySelector('[data-current]').nextSibling);                      // next VALUE

// console.log(document.querySelector('[data-current]').previousElementSibling);           // previous ELEMENT
// console.log(document.querySelector('[data-current]').nextElementSibling);               // next ELEMENT


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
