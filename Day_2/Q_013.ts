import readline from "readline/promises";
import { stdin, stdout } from "process";

const rl = readline.createInterface(stdin, stdout);

const a: string = await rl.question("the 1st number is ");

rl.close();
const x: number = Number(a);

const g1: Array<number> = [];

for (let i: number = 1; i <= Math.floor(x / 2); i++) {
  if (x % i === 0) {
    g1.push(i);
  }
}

let sum: number = 0;
for (let j: number = 0; j < g1.length; j++) {
  sum += g1[j];
}

if (sum === x) {
  console.log("it is a perfect number");
} else {
  console.log("it is not a perfect number");
}
