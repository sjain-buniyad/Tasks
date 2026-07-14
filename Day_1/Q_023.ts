import readline from "readline/promises";
import { stdin as input, stdout as output } from "process";

const rl = readline.createInterface({ input, output });

let a: number | string = await rl.question("the character is ");

rl.close();
console.log(typeof a);

const volews: Array<string> = ["a", "e", "i", "o", "u"];
if (volews.includes(a)) {
  console.log("the character is volew");
} else {
  console.log("its not a volew");
}
