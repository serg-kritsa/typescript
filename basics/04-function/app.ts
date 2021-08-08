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
