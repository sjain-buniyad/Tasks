import readline from "readline/promises";
import { stdin, stdout } from "process";

const rl = readline.createInterface(stdin, stdout);

const a: string = await rl.question("the fibonaci upto how many numbers: ");

rl.close();

const n: number = Number(a);

let x: number = 1;
let y: number = 0;
let fibonacci: number = 0;
for (let i: number = 1; i < n + 1; i++) {
  fibonacci = y + x;
  console.log(fibonacci);
  y = x;
  x = fibonacci;
}
