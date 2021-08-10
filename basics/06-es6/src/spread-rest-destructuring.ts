// spread
const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking'];

activeHobbies.push(...hobbies);

const person = {
  name: 'Max',
  age: 30
};

const copiedPerson = { ...person };

// rest
const sum = (...numbers: number[]) => {
    return numbers.reduce((curResult, curValue) => {
      return curResult + curValue;
    }, 0);
  };
  
  const addedNumbers = sum(5, 10, 2, 3.7);
  console.log(addedNumbers);

// destructuring
//  array
const [hobby1, hobby2, ...remainingHobbies] = hobbies;
console.log(hobbies, hobby1, hobby2);

//  object
const credentials = {
  login: 'Max',
  password: 'a'
};
const { login: user, password } = credentials;
console.log(user, password, credentials);