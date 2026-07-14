import readline from "readline/promises";
import { stdin as input, stdout as output } from "process";

const rl = readline.createInterface({ input, output });

let a: number | string = await rl.question("the number is ");
rl.close();

a = Number(a);

if (a % 2 === 0) {
  console.log("the number is even");
} else {
  console.log("the number is odd");
}
