
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: string, b: number): string;
function add(a: number, b: string): string;
function add(a: Combinable, b: Combinable) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}

const result1 = add('Max', ' Schwarz');
result1.split(' ');

const result2 = add(1, ' Schwarz');
result2.split(' ');

const result3 = add('Max', 2);
result3.split(' ');

const result4 = add(1, 2);
// result4.split(' '); // merthod error // because returns number 