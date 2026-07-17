import readline from "readline/promises";
import { stdin, stdout } from "process";

const rl = readline.createInterface(stdin, stdout);

const a: string = await rl.question("the 1st number is ");

rl.close();

function factorial(x: number) {
  if (x === 0) {
    console.log("the factorial of 1");
    return 1;
  } else {
    let f: number = 1;
    for (let i: number = 1; i < x + 1; i++) {
      f = i * f;
    }
    return f;
  }
}

const x = a.split("");

let sum: number = 0;
while (x.length > 0) {
  sum += factorial(Number(x.pop()));
}

console.log(sum);
