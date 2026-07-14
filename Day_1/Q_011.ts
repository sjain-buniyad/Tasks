import readline from "readline/promises";
import { stdin as input, stdout as output } from "process";

const rl = readline.createInterface({ input, output });

let rate: number | string = await rl.question("the interest is : ");
let amount: number | string = await rl.question("the amount of loan : ");
let time: number | string = await rl.question("the duration of loan : ");

rl.close();

rate = Number(rate);
amount = Number(amount);
time = Number(time);

const si = (amount * rate * time) / 100;

console.log("the simple interesst is : ", si);
