import readline from "readline/promises";
import { stdin as input, stdout as output } from "process";

const rl = readline.createInterface({ input, output });

let a: number | string = await rl.question("give me number ");
rl.close();

function calculator(expression: string) {
  const match = expression.match(/^(\d+)\s*([+\-*/])\s*(\d+)$/);

  if (!match) {
    throw new Error("something wrong");
  }
  const [, a, operator, b] = match;
  const num1 = Number(a);
  const num2 = Number(b);

  if (operator === "+") {
    return num1 + num2;
  }
  if (operator === "-") {
    return num1 - num2;
  }
  if (operator === "*") {
    return num1 * num2;
  }
  if (operator === "/") {
    return num1 / num2;
  }
}

console.log(calculator(a));
