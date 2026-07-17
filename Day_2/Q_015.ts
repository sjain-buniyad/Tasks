import readline from "readline/promises";
import { stdin, stdout } from "process";

const rl = readline.createInterface(stdin, stdout);

const a: string = await rl.question("the number for pyramind ");

rl.close();

const x: number = Number(a);

for (let i: number = 1; i < x + 1; i++) {
  let space: string = " ".repeat(x - i);
  let star: string = "*".repeat(2 * i - 1);
  console.log(space + star);
}
