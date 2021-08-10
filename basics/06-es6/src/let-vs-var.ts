
// CONST
const userName = 'Max';
// userName = 'Maximilian'; // error // cannot be changed

// LET
let age = 30;
age = 29; // can be changed

// VAR vs LET 
// function scope
var test = 'value'; // become global
function demoFn(a: number, b: number):void {
  var varIsUnavailableFromOutside;
  let letIsUnavailableFromOutside;
  varIsUnavailableFromOutside = a + b;
  letIsUnavailableFromOutside = a + b;
}
// console.log(varIsUnavailableFromOutside); // error
// console.log(letIsUnavailableFromOutside); // error

// block scope
if (true) {
  var varInBlockScope = true; // warning // available in if and outside
  let letInBlockScope = true; // warning // available in if // block scope
}
// console.log(varInBlockScope); // true in JS
// console.log(letInBlockScope); // error
