import readline from "readline/promises";
import { stdin as input, stdout as output } from "process";

const rl = readline.createInterface({ input, output });

const a = await rl.question("1st number is : ");
const b = await rl.question("2nd number is : ");
const c = await rl.question("3rd number is : ");

rl.close();
if (a > b) {
  if (b > c) {
    console.log("3rd is smallest");
  } else {
    console.log("2nd is smallest");
  }
} else {
  if (a > c) {
    console.log("3rd is smallest");
  } else {
    console.log("1st is smallest");
  }
}
