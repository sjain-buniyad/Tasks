import readline from "readline/promises";
import { stdin as input, stdout as output } from "process";

const rl = readline.createInterface({ input, output });

let a: number | string = await rl.question("the age is ");

rl.close();

a = Number(a);

if (a >= 18) {
  console.log("person is eligible for voting");
} else {
  console.log("person not eligible for voting");
}
