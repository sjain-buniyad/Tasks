import readline from "readline/promises";
import { stdin as input, stdout as output } from "process";

const rl = readline.createInterface({ input, output });

let a: number | string = await rl.question("the charater is ");

rl.close();

if (a === a.toUpperCase()) {
  console.log("it is upper case");
} else {
  console.log("it us lower case");
}
