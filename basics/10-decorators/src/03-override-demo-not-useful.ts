console.log('0. ============================');
function D0(template: string, hookId: string) {
  return function(constructor: any) {
    console.log(template, hookId);
    let o0 = new constructor();
    console.log(o0);
  };
}
@D0('<h1></h1>', 'app')
class P0 {
  nameProp = 'user';
  constructor() {console.log('Creating P object...');}
}

console.log('1. ============================');
function D1(template: string, hookId: string) {
  // function fn0<T>(_: T) {}
  // function fn1<T extends { new (): {} }>(_: T) {}
  // function fn2<T extends { new (args: any[]): {} }>(_: T) {}
  // function fn3<T extends { new (...args: any[]): {} }>(_: T) {}
  interface r0 {}
  // function fn4<T extends { new (...args: any[]): r0 }>(_: T) {}
  return function<T extends { new (...args: any[]): r0 }>( // to make work 'class extends originalConstructorFn'
    originalConstructorFn: T
  ) {
    console.log('1) ', originalConstructorFn); // ƒ P() { this.nameProp = 'user'; console.log('Creating P object...'); }
    console.log('1) ', originalConstructorFn.name); // P
    console.log('1) ', template, hookId);
    return class extends originalConstructorFn {
      constructor(..._: any[]) {
        super(); // originalConstructorFn called to avoid compilation errors
      }
    };
  };
}
@D1('<h1></h1>', 'app')
class P1 {
  nameProp = 'user';
  constructor() {
    console.log('Creating P object...');
  }
}
console.log('2. ============================');
function D2(template: string, hookId: string) {
  interface r0 {}
  return function<T extends { new (...args: any[]): r0 }>(
    originalConstructorFn: T
  ) {
    return class extends originalConstructorFn {
      constructor(...args: any[]) {
        super(); // originalConstructorFn called to avoid compilation errors
        console.log('2) ', this); // class_2 {nameProp: 'user', [[Prototype]]: P2}
        console.log('2) ', args); // []
        console.log('2) ', template, hookId); // <h1></h1> app
      }
    };
  };
}
@D2('<h1></h1>', 'app')
class P2 {
  nameProp = 'user';
  constructor() {
    console.log('Creating P object...');
  }
}
const p2 = new P2();

console.log('3. ============================ NOT USEFUL');
function D3(template: string, hookId: string) {
  interface r3 {classPropertyName: string}
  return function<T extends { new (..._: any[]): r3 }>(
    originalConstructorFn: T
  ) {
    return class extends originalConstructorFn {
      constructor(..._: any[]) {
        super();
        const hookEl = document.getElementById(hookId);
        if (hookEl) {
          hookEl.innerHTML = template;
          hookEl.querySelector('h1')!.textContent = this.classPropertyName;
        }
      }
    };
  };
}
@D3('<h1></h1>', 'app')
class P3 {
  classPropertyName = 'user';
  constructor() {
    console.log('Creating P object...');
  }
}
const p3 = new P3();
console.log('runtime',p3, p3.classPropertyName); // class_3 {classPropertyName: 'user', [[Prototype]]: P3}