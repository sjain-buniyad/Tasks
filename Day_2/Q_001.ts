import readline from "readline/promises";
import { stdin, stdout } from "process";

const rl = readline.createInterface(stdin, stdout);

const n: string = await rl.question("the number is ");
rl.close();

const x: number = Number(n);

if (x === 0) {
  console.log("the factorial of 1");
} else {
  let f: number = 1;
  for (let i: number = 1; i < x + 1; i++) {
    f = i * f;
  }

  console.log("the factorial is ", f);
}

// recursion
// function factorial(n: number) {
//   if (n === 0) {
//     return 1;
//   }
//   return n * factorial(n - 1);
// }

// console.log(factorial(x));
