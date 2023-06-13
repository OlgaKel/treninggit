"use strict";
function each(arr, callback) {
	let result = [];
	for (let elem of arr) {
		result.push( callback(elem) ); // вызываем функцию-коллбэк
	}
	return result;
}
let result = each(['we', 'qa', 'as', 'cx', 'cx'], function(str) {
	return str.substr(0,1).toUpperCase()+str.substr(1);
});
console.log(result);
