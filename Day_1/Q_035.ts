import readline from "readline/promises";
import { stdin, stdout } from "process";

const rl = readline.createInterface(stdin, stdout);

let a: number | string = await rl.question("the N is ");

rl.close();

a = Number(a);

for (let i: number = 1; i < a + 1; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
