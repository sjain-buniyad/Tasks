import readline from "readline/promises";
import { stdin, stdout } from "process";

const rl = readline.createInterface(stdin, stdout);

const a: string = await rl.question("the string is : ");

rl.close();

const s = a.split("");
let b: Array<string> = [];
for (let i: number = 1; i < s.length + 1; i++) {
  console.log(s[s.length - i]);
  b.push(s[s.length - i]);
}
console.log(b.join(""));
