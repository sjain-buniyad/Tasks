import readline from "readline/promises";
import { stdin as input, stdout as output } from "process";

const rl = readline.createInterface({ input, output });

let a: number | string = await rl.question("the number is ");

rl.close();

a = Number(a);

if (a % 3 === 0 && a % 5 === 0) {
  console.log("it is divisible with 3 and 5");
} else {
  console.log("it is not divisible");
}
