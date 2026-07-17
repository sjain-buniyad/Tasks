import readline from "readline/promises";
import { stdin, stdout } from "process";

const rl = readline.createInterface(stdin, stdout);

const a: string = await rl.question("the number ");

rl.close();
const n: number = Number(a);
const s: string = String(n);
const d = s.split("");

let count: number = 0;
for (let i: number = 1; i < d.length + 1; i++) {
  count += 1;
}
console.log(count);
