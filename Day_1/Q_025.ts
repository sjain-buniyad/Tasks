import readline from "readline/promises";
import { stdin as input, stdout as output } from "process";

const rl = readline.createInterface({ input, output });

let a: number | string = await rl.question("the 1st number is ");
let b: number | string = await rl.question("the 2nd number is ");
let c: number | string = await rl.question("the 3rd number is ");
let d: number | string = await rl.question(" the 4th number is ");

rl.close();
a = Number(a);
b = Number(b);
c = Number(c);
d = Number(d);

if (a < b) {
  if (b < c) {
    if (c < d) {
      console.log("the 4th is greatest");
    } else {
      console.log("the 3rd is greatest");
    }
  } else {
    if (b < d) {
      console.log("the 4th is greatest");
    } else {
      console.log("the 2nd is greatest");
    }
  }
} else {
  if (a < c) {
    if (c < d) {
      console.log("the 4th is greatest");
    } else {
      console.log("the 3rd is greatest");
    }
  } else {
    if (a < d) {
      console.log("the 4th is greatest");
    } else {
      console.log("the 1st is greatest");
    }
  }
}
