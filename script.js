
"use strict";

let i = 0;
function timer(){
	setTimeout(function(){
console.log(i++);
if(i<2){
	timer();
}
},1000);
}

function timer(){
	setTimeout(function(){
console.log(i++);
if(i<3){
	timer();
}
},2000);
}

function timer(){
	setTimeout(function(){
console.log(i++);
if(i<4){
	timer();
}
},3000);
}
timer();
