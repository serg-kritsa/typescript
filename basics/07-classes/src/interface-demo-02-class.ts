interface Named {
  readonly name: string;
  optionalPropertyWithQuestionMark?: string;
}

interface Greetable extends Named {
  greet(phrase?: string): void;
}

class Person implements Greetable {
  name: string;
  age = 30;

  constructor(n: string) {
    this.name = n;
  }

  greet(phrase: string) {
    console.log(phrase + ' ' + this.name);
  }
}

let user2: Greetable = new Person('Max');

// user2.name = 'Manu'; // readonly error

console.log(user2);