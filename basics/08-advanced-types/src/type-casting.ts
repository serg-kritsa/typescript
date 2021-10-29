// const userInputElement = document.getElementById('user-input')!; // ! means expression before will never return null // element exists on page // developer responsibility 

// syntax 1 
const userInputElement1 = <HTMLInputElement>document.getElementById('user-input')!;

// syntax 2
const userInputElement2 = document.getElementById('user-input')! as HTMLInputElement;  // developer responsibility that it's input


// if element CAN be null, then it should be checked before casting 
const userInputElement = document.getElementById('user-input');
if (userInputElement) {

    // shorthand    1st operator                  2nd operator on result of 1st
  (userInputElement as HTMLInputElement).value = 'Hi there!';
}