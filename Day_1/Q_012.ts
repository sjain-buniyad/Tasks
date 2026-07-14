import readline from "readline/promises";
import { stdin as input, stdout as output } from "process";

const rl = readline.createInterface({ input, output });

let rate: number | string = await rl.question("the interest is : ");
let amount: number | string = await rl.question("the amount of loan : ");
let time: number | string = await rl.question("the duration of loan : ");
let compound: number | string = await rl.question(
  "the number of compounds per year : ",
);

rl.close();
rate = Number(rate);
amount = Number(amount);
time = Number(time);
compound = Number(compound);

let total = (amount * (1 + rate / (compound * 100))) ** (compound * time);
const ci = total - amount;

console.log("the compound interest is : ", ci);
