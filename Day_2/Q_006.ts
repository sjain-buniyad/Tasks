import readline from "readline/promises";
import { stdin, stdout } from "process";

const rl = readline.createInterface(stdin, stdout);

const a: string = await rl.question("the number ");

rl.close();
const n: number = Number(a);
const s: string = String(n);
const d = s.split("");

let product: number = 1;

for (let i: number = 0; i < d.length; i++) {
  product *= Number(d[i]);
}

console.log(product);
