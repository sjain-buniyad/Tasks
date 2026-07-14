let a: number = 1;
let b: number = 2;
console.log("a = ", a);
console.log("b = ", b);

a = a + b;
b = a - b; // a + b - b
a = a - b; // a + b - a

console.log("a = ", a);
console.log("b = ", b);
