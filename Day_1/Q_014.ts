import readline from "readline/promises";
import { stdin as input, stdout as output } from "process";

const rl = readline.createInterface({ input, output });

let c: number | string = await rl.question("the fahrenheit ");

rl.close();

c = Number(c);

const f = (c * 9) / 5 + 32;
console.log("the f is ", f);
