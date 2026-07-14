import readline from "readline/promises";
import { stdin as input, stdout as output } from "process";

const rl = readline.createInterface({ input, output });

let f: number | string = await rl.question("the fahrenheit ");

rl.close();

f = Number(f);

const c = ((f - 32) * 5) / 9;
console.log("the celsius is ", c);
