interface ErrorContainer { // { email: 'Not a valid email', username: 'Must start with a character!' }
    // !!!
    [anypropertyname: string]: string;
}

const validationErrors: ErrorContainer = {
    email: 'Not a valid email!',
    username: 'Must start with a capital character!'
};