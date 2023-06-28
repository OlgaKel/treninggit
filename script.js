"use strict";

let elem = document.querySelector('p');
let btn1 = document.querySelector('.btn1');
let btn2 = document.querySelector('.btn2');
let btn3 = document.querySelector('.btn3');

btn1.addEventListener('click', function(){
      elem.innerHTML = '<del>' + elem.textContent + '</del>';
    
})
btn2.addEventListener('click', function(){
    elem.innerHTML = '<b>' + elem.textContent + '</b>';
  
})
btn3.addEventListener('click', function(){
    elem.classList.add('colored'); 
})

