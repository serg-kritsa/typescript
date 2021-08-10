// function type 
// type AddFn = (a: number, b: number) => number;
// let add: AddFn;
// add = (n1: number, n2: number) => {
//     return n1 + n2;
// };

  
// functional interface
interface funtionalInterface {
    (a: number, b: number): number; // anonymous function
}
let add: funtionalInterface;
add = (n1: number, n2: number) => {
    return n1 + n2;
};

interface usualInterface {
    namedFn(phrase: string): void;
}
