import readline from "readline/promises";
import { stdin, stdout } from "process";

const rl = readline.createInterface(stdin, stdout);

let a: number | string = await rl.question("the N is ");

rl.close();

a = Number(a);

const sum = (a * (a + 1)) / 2;
console.log("the sum is ", sum);
