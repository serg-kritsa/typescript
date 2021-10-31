function FirstClassDecorator(constructor: Function) { // 1) declaration
  console.log('Execution...'); // Execution...
  console.log(constructor); // ƒ MyTest() {}
}
@FirstClassDecorator // 2) execution
class MyTest {}



function SimpleDecorator(constructor: Function) { // 1) declaration
  console.log('Decorator\'s code...');
  console.log(constructor);
}

function DecoratorWithParam(logString: string) {
  return function(constructor: Function) { // anonymous function
    console.log(logString);
    console.log(constructor);
  };
}

@DecoratorWithParam('PASSED VALUE VIA PARAM')
@SimpleDecorator // 2) execution
class Person {
  name = 'user';

  constructor() {
    console.log('CONSTRUCTOR...');
  }
}
const pers = new Person();
console.log(pers);