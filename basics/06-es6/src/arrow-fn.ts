
// arrow function #1
// const fnWithReturn = function(a: number, b: number) {
//   return a + b; 
// }
const fnWithReturn = (a: number, b: number) => {
  return a + b; 
}

// arrow function #2
const button = document.querySelector('button');
if (button) {
  // button.addEventListener('click', function(event){ console.log(event) });
  button.addEventListener('click', event => console.log(event));
}

// arrow function #3
const add = (a: number, b: number) => a + b; // shorthand for function w/ 1 return
const printOutput: (a: number | string) => void = output => console.log(output); // declaration: definition w/ union = implementation. example below
printOutput(add(5, 2));

// function w/ union type as param
// const fn1 = paramWithoutType => console.log(paramWithoutType); // error // type should be added
const fn2 = (paramWithUnion: number | string) => console.log(paramWithUnion); // now it works
// const fn3: Function = paramWithoutType => console.log(paramWithoutType); // error // type should be added
let fn4: (a: number | string) => void; // union in definition
fn4 = output => console.log(output);

// function w/ default param value
const fnWithDefaultValue = (a: number, b: number = 1) => a + b;
fnWithDefaultValue(5); // 6
const fnWithDefaultValueShouldBeInTheEnd = (a: number = 1, b: number) => a + b;
// fnWithDefaultValueShouldBeInTheEnd(5); // error

