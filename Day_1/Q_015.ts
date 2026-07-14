import readline from "readline/promises";
import { stdin as input, stdout as output } from "process";

const rl = readline.createInterface({ input, output });

let radius: number | string = await rl.question("the radius of circle ");

rl.close();

radius = Number(radius);

const area: number = Math.PI * radius ** 2;

console.log("area of cicle is ", area);
