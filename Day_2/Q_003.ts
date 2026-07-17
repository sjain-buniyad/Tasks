import readline from "readline/promises";
import { stdin, stdout } from "process";

const rl = readline.createInterface(stdin, stdout);

const a: string = await rl.question("the number ");

rl.close();
const s = a.split("");
let split: string = "";
for (let i: number = 0; i < s.length; i++) {
  split += s[s.length - 1 - i];
}
const n: number = Number(split);

console.log(n);
