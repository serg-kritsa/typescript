
const userInput01 = null;
const storedData01 = userInput01 || 'DEFAULT';
console.log(storedData01); // DEFAULT

const userInput02 = '';
const storedData02 = userInput02 || 'DEFAULT';
console.log(storedData02); // DEFAULT

// ?? (coalescing) means if null || undefined before to use value after ??
const userInput12 = undefined;
const storedData12 = userInput12 ?? 'DEFAULT';
console.log(storedData12); // DEFAULT

// if empty string is fine 
const userInput11 = '';
const storedData11 = userInput11 ?? 'DEFAULT';
console.log(storedData11); // ''