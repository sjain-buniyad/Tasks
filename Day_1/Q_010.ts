import readline from "readline/promises";
import { stdin as input, stdout as output } from "process";

const rl = readline.createInterface({ input, output });

let a = await rl.question("number is : ");

rl.close();

a = Number(a);

if (a > 0) {
  console.log("number is positive");
} else if (a < 0) {
  console.log("number is negative");
} else {
  console.log("number is zero");
}
