import readline from "readline/promises";
import { stdin, stdout } from "process";

const rl = readline.createInterface(stdin, stdout);

const a: string = await rl.question("the string is : ");

rl.close();

const title: string = a.toUpperCase();

console.log(title);
