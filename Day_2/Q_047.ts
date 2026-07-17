import readline from "readline/promises";
import { stdin, stdout } from "process";

const rl = readline.createInterface(stdin, stdout);

const a: string = await rl.question("the string is : ");

rl.close();

const s: string = a.split(" ");
let st: string = "";
for (let i: number = 0; i < s.length; i++) {
  if (s[i] !== " ") {
    st = st + s[i];
  }
}

console.log(st);
