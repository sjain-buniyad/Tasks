import readline from "readline/promises";
import { stdin, stdout } from "process";

const rl = readline.createInterface(stdin, stdout);

const a: string = await rl.question("the number ");

rl.close();
const n: number = Number(a);

for (let i: number = 1; i < n + 1; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}
