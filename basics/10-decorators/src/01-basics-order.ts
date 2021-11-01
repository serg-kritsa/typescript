console.log('vvvvvvvvvvvvvvvvvvvvvv Order demo');
function FirstDecorator(_: string) {
  console.log('FirstDecorator FACTORY');
  return function(_: Function) {
    console.log('FirstDecorator EXECUTION');
  };
}

function SecondDecorator(_: string) {
  console.log('SecondDecorator FACTORY');
  return function(_: any) {
    console.log('SecondDecorator EXECUTION');
  }
}

@FirstDecorator('')
@SecondDecorator('')
class OrderDemo {}  
console.log('^^^^^^^^^^^^^^^^^^^^^^ Order demo');

// FirstDecorator FACTORY
// SecondDecorator FACTORY
// SecondDecorator EXECUTION
// FirstDecorator EXECUTION
