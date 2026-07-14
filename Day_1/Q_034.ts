import readline from "readline/promises";
import { stdin, stdout } from "process";

const rl = readline.createInterface(stdin, stdout);

let a: number | string = await rl.question("which table ");

rl.close();

a = Number(a);

for (let i: number = 1; i < 11; i++) {
  console.log(`${i}x${a}=${i * a}`);
}
