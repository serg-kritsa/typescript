// 
interface Bird {
  type: 'bird'; // 2) add type prop
  flyingSpeed: number;
}

interface Horse {
  type: 'horse'; // 2) add type prop
  runningSpeed: number;
}

type Animal = Bird | Horse; // became different properties names of speed is issue 1)

function moveAnimal(animal: Animal) {
  let speed; // internal variable
  // discriminated-unions-pattern
  switch (animal.type) { // 3) check type prop 
    case 'bird': // !! typescript will recognize
      speed = animal.flyingSpeed; // 4) to get value
      break;
    case 'horse':
      speed = animal.runningSpeed; // 4) to get value
      break;
  }
  console.log('Moving at speed: ' + speed);
}

moveAnimal({type: 'bird', flyingSpeed: 10});