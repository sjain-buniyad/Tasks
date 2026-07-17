import readline from "readline/promises";
import { stdin, stdout } from "process";

const rl = readline.createInterface(stdin, stdout);

const a: string = await rl.question("the string is : ");

rl.close();

const rev: string = a.split("").reverse().join("");

if (a === rev) {
  console.log("it is palindrome");
} else {
  console.log("it is not a palindrome");
}
