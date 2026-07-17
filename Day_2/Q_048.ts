import readline from "readline/promises";
import { stdin, stdout } from "process";

const rl = readline.createInterface(stdin, stdout);

const a: string = await rl.question("the string is : ");

rl.close();

const s: string = a.split(" ");
const set: Set<any> = new Set(s);
const list: array<any> = [...set];
const st: string = list.join("");

console.log(st);
