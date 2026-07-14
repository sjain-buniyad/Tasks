import readline from "readline/promises";
import { stdin as input, stdout as output } from "process";

const rl = readline.createInterface({ input, output });

const a = await rl.question("1st number is: ");
const b = await rl.question("2nd number is: ");

if (a > b) {
  console.log("1st is greater then 2nd");
} else {
  console.log("2nd is greater then 1st");
}

rl.close();
