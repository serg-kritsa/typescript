interface ValidatorConfig {
  [validatableClassname: string]: {
    [validatablePropname: string]: string[]; // ['required', 'positive']
  };
}

const registeredValidators: ValidatorConfig = {};

function Required(target: any, propName: string) {
  const className = target.constructor.name;
  registeredValidators[className] = {
      ...registeredValidators[className], // keep existing key-value pairs
      // [propName]: ['required']
      //                                              if not undefined, continue 
      //                                                          if null || undefined, set value after ?? 
      [propName]: [...(registeredValidators[className]?.[propName] ?? []), 'required'] // keep existing array element // shorthand with ts coaliscing
  };
}

function PositiveNumber(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
      ...registeredValidators[target.constructor.name],
      [propName]: [...(registeredValidators[target.constructor.name]?.[propName] ?? []), 'positive']
  };
}

function validate(obj: any) {
  const validatableObjectConfig = registeredValidators[obj.constructor.name];
  if (!validatableObjectConfig) {
    return true;
  }
  let isValid = true;
  for (const prop in validatableObjectConfig) { // for..in - object
    for (const validator of validatableObjectConfig[prop]) { // for..of - array
      switch (validator) {
        case 'required':
          isValid = isValid && !!obj[prop];
          break;
        case 'positive':
          isValid = isValid && obj[prop] > 0;
          break;
      }
    }
  }
  return isValid;
}

class Course {
  @Required
  title: string;
  @PositiveNumber
  price: number;

  constructor(t: string, p: number) {
    this.title = t;
    this.price = p;
  }
}

const courseForm = document.querySelector('form')!;
courseForm.addEventListener('submit', event => {
  event.preventDefault();
  const titleEl = document.getElementById('title') as HTMLInputElement;
  const priceEl = document.getElementById('price') as HTMLInputElement;

  const title = titleEl.value;
  const price = +priceEl.value;

  const createdCourse = new Course(title, price);

  if (!validate(createdCourse)) {
    alert('Invalid input, please try again!');
    return;
  }
  console.log(createdCourse);
});  