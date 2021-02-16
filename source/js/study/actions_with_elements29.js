"use strict";

// (29) ACTIONS WITH ELEMENTS

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      vasya = document.getElementsByClassName('vasya'),
      hearts = document.querySelectorAll('.heart'),
      bomko = document.querySelectorAll('.bomko'),
    //   wrapper = wrapper.querySelector('.wrapper'), // wrapper а не document це буде більш чіткіше
      wrapper = document.querySelector('.wrapper'),
    //   oneHeart = wrapper.querySelector('.heart'), // wrapper а не document це буде більш чіткіше
      oneHeart = document.querySelector('.heart'),
      body = document.body;

console.dir(box);
/* 
box.style.backgroundColor = 'blue';
btns[1].style.borderRadius = '100%'; // correct
// btns.style.borderRadius = '100%'; // incorrect 
*/

// THE SAME HERE ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// THAT'S HOW I CAN ADD CLASSES, DIV, TEXT OR SMTH ////////////////////////////////////////////////////////////////////////////////
box.style.cssText = 'background-color: red; font-size: 25px'; // when you have to write more than one css style

let num = 45; // very usable thing when you have to write smth like this, and don't forget about `` 
let color = 'red';
let radius = 100;
box.style.cssText = `background-color: ${color}; font-size: ${num}px`;
btns[1].style.cssText = `border-radius: ${radius}%`;


hearts.forEach(item => {
    item.style.fontSize = '20px';
    item.style.backgroundColor = 'blue';
    item.style.fontWeight = 'bold';
});

/* for (let i = 0; i < hearts.length; i++) {
    hearts[i].style.fontSize = '20px';
    hearts[i].style.backgroundColor = 'blue';
    hearts[i].style.fontWeight = 'bold';
} */ // of course, in addition, I can make cicle, but that's not modern solution(decision) 



// THAT'S HOW I CAN ADD DIV OR TEXT ///////////////////////////////////////////////////////////////////
const div = document.createElement('div');
const text = document.createTextNode('I\'m here!');

// THAT'S HOW I CAN ADD CLASSES TO MY DIV OR TEXT /////////////////////////////////////////////////////
div.classList.add('black');

// append & prepend / before & after ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// body.append(text); // global-body and append mean in the end body                        // if you wanna run this code, then you need add to src, js in html 'defer' 

wrapper.append(div); // append                                                          // if you wanna run this code, then you need add to src, js in html 'defer'
// wrapper.appendChild(div); // appendChild the same but older


// wrapper.prepend(div);  // prepend                                                      // if you wanna run this code, then you need add to src, js in html 'defer'



// hearts[1].before(div); // before(); 
// hearts[1].after(div); // after();




// HOW ADD HTML TEXT IN JS /////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 1 variant // you can play with 'insertAdjacentHTML', 'beforeend', 'afterend' and so on 
div.innerHTML = "<h1>Hello world!</h1>"; // I can add html structure
div.insertAdjacentHTML('afterend', '<h2>hello</h2>');


// 2 variant but only with text
// div.textContent = "Hello"; // only with text


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Колись не було before after і так далі, а було insertBefore() or insertAfter() //////////////////////////////////////////////////////////

// wrapper.insertBefore(div, hearts[1]); // перший аргумент: шо вставляти, а другий: перед чим вставляти





 

// THAT'S HOW CAN I REMOVE SMTH ///////////////////////////
// vasya[1].remove(); // remove(); 

// AND VERY OLD REMOVE IS 'removeChild()' ///////////////////////////////////////////////////////
// wrapper.removeChild(hearts[0]);


// that's how can I replace smth (remove & replace another value) ////////////////////////////

// btns[0].replaceWith(bomko[1]); // replaceWith();
// wrapper.replaceChild(hearts[0], bomko[1]); // this oldest version 'replace()', and it has a place in this mad world







/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//that's how can I replace text or smth (it's my code)
/* const text1 = document.createTextNode('what');

bomko[2].replaceWith(text1); */




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
