import readline from "readline/promises";
import { stdin, stdout } from "process";

const rl = readline.createInterface(stdin, stdout);

const a: string = await rl.question("the number ");

rl.close();
const n: number = Number(a);
const s: string = String(n);
const d = s.split("");

let pro: number = 0;

for (let i: number = 0; i < d.length; i++) {
  pro += Number(d[i]) ** 3;
}

if (pro === n) {
  console.log("is an armstrong number");
} else {
  console.log("its not an amrstrong number");
}
