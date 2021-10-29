// primitive types 
type Combinable = string | number; // union
type Numeric = number | boolean;
type Universal = Combinable & Numeric; // intersection

function test(a: Combinable, b: Combinable) {
  // TypeGuard for primitive types using typeof
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}
