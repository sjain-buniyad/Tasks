import readline from "readline/promises";
import { stdin, stdout } from "process";

const rl = readline.createInterface(stdin, stdout);

const a: string = await rl.question("the 1st number is ");
const b: string = await rl.question("the 2nd number is ");

rl.close();
const x: number = Number(a);
const y: number = Number(b);

const g1: Set<number> = new Set([]);
const g2: Set<number> = new Set([]);

for (let i: number = 1; i < x + 1; i++) {
  if (x % i === 0) {
    g1.add(i);
  }
}

for (let i: number = 1; i < y + 1; i++) {
  if (y % i === 0) {
    g2.add(i);
  }
}
const set = g1.intersection(g2);
const gcd = Math.max(...set);
const lcm = (x * y) / gcd;
console.log("the gcd is ", lcm);
