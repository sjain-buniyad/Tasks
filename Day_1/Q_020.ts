import readline from "readline/promises";
import { stdin as input, stdout as output } from "process";

const rl = readline.createInterface({ input, output });

let a: number | string = await rl.question("the number is ");
let b: number | string = await rl.question("the power is ");
rl.close();

a = Number(a);
b = Number(b);
let power = 1;

if (b === 0) {
  power = 1;
} else {
  for (let i = 1; i < b + 1; i++) {
    power = power * a;
  }
}

console.log(power);
