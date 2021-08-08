let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Max';
// userName = userInput; // error
if (typeof userInput === 'string') {
  userName = userInput; // can be assigned after type checking
}
