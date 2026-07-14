import readline from "readline/promises";
import { stdin as input, stdout as output } from "process";

const rl = readline.createInterface({ input, output });

let a: number | string = await rl.question("the year is ");

rl.close();

a = Number(a);

let leap = new Date(a, 1, 29);
if (leap.getMonth() === 1 && leap.getDate() === 29) {
  console.log("leap year");
}
console.log("Not a leap year");
