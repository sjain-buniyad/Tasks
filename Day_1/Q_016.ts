import readline from "readline/promises";
import { stdin as input, stdout as output } from "process";

const rl = readline.createInterface({ input, output });

let a: number | string = await rl.question("the length is ");
let b: number | string = await rl.question("the breath is ");
rl.close();

a = Number(a);
b = Number(b);

const perimeter: number = 2 * (a + b);
console.log("the perimeter is ", perimeter);
