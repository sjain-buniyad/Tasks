import readline from "readline/promises";
import { stdin, stdout } from "process";

const rl = readline.createInterface(stdin, stdout);

const a: string = await rl.question("the number ");

rl.close();
const n: number = Number(a);
const s: string = String(n);
const d = s.split("");

let sum: number = 0;

for (let i: number = 0; i < d.length; i++) {
  const a: number = Number(d[i]);
  if (a % 2 !== 0) {
    console.log("the number is prime ", a);
  }
}
