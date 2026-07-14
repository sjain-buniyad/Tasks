import readline from "readline/promises";
import { stdin as input, stdout as output } from "process";

const rl = readline.createInterface({ input, output });

let a: number | string = await rl.question("the number is ");

rl.close();

a = Number(a);

const square: number = a ** 2;
const cube: number = a ** 3;

console.log(`the square is ${square} and the cube is ${cube}`);
