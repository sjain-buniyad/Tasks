import readline from "readline/promises";
import { stdin as input, stdout as output } from "process";

const rl = readline.createInterface({ input, output });

let a: number | string = await rl.question("the marks is ");

rl.close();
a = Number(a);

if (a >= 90) {
  console.log("The grade is A");
} else if (90 < a && a <= 80) {
  console.log("the grade is B");
} else if (80 < a && a <= 60) {
  console.log("the grade is C");
} else if (60 < a && a <= 50) {
  console.log("the grade is D");
} else if (50 < a && a <= 30) {
  console.log("the grade is E");
} else {
  console.log("the grade is F");
}
