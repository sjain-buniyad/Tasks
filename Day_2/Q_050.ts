import readline from "readline/promises";
import { stdin, stdout } from "process";

const rl = readline.createInterface(stdin, stdout);

const a: string = await rl.question("the string is : ");

rl.close();

const s = a.split(" ");

let max_count: number = 0;
for (const l of s) {
  console.log(l);
  const spl = l.split("");
  let count: number = 0;
  for (let i: number = 0; i < spl.length; i++) {
    count += 1;
  }
  if (count > max_count) {
    max_count = count;
  }
}

console.log(max_count);
