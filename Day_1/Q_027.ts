import readline from "readline/promises";
import { stdin as input, stdout as output } from "process";

const rl = readline.createInterface({ input, output });

let a: number | string = await rl.question("the 1st angle is ");
let b: number | string = await rl.question("the 2nd angle is ");
let c: number | string = await rl.question("the 3rd angle is ");

rl.close();

a = Number(a);
b = Number(b);
c = Number(c);
let angles: Set<number> = new Set([a, b, c]);

if (angles.has(90)) {
  console.log("it is right angle triangle");
} else if ([...angles].every((num) => num < 90)) {
  console.log("it is acute angled triangle");
} else {
  console.log("it is obtuse angled triangled");
}
