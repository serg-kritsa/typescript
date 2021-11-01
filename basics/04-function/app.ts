function ignoring_not_used_2nd_param_in_ts(n1: number, _: number) {
  // return n1 + n2;
  return n1;
}

function add(n1: number, n2: number) {
  return n1 + n2;
}

function printResult(num: number): void {
  console.log('Result: ' + num);
  // doesn't return something
}

function printResultWithEmptyReturn(num: number): void {
  console.log('Result: ' + num);
  return
}
function printResultWithEmptyReturn_undefinedValueIsImportantForBusinessLogic(num: number): undefined {
  console.log('Result: ' + num);
  return
}

printResult(add(5, 12));

let fnRef01: Function;
// fnRef01 = 5; // error

let fnRef02: Function;
// fnRef02 = add;
fnRef02 = printResult; // wrong function by mistake
console.log(fnRef02(8, 8)); // not expected result

let combineValues: (a: number, b: number) => number;
combineValues = add;
// combineValues = printResult; // error
// combineValues = 5; // error
console.log(combineValues(8, 8));


function addAndHandle(
  n1: number, 
  n2: number, 
  cb: (num: number) => void // function as argument (callback)
) {
  const result = n1 + n2;
  cb(result);
}
  
addAndHandle(10, 20, result => console.log(result));


// never return type
function throwErrorReturnsNever(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

function infiniteLoopReturnsNever(message: string, code: number): never {
  while (true) {}
}
