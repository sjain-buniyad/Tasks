import readline from "readline/promises";
import { stdin as input, stdout as output } from "process";

const rl = readline.createInterface({ input, output });

let a: number | string = await rl.question("the number is ");
let b: number | string = await rl.question("the divisor is ");
rl.close();

a = Number(a);
b = Number(b);

const q = parseInt(a / b);
const p = q * b;
const r = p - q;
console.log(r);
