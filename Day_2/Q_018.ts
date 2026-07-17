const n: number = 5;

let count: number = 0;
for (let i: number = 1; i < n; i++) {
  let line = "";
  for (let j: number = 1; j <= i; j++) {
    line += count++ + " ";
  }
  console.log(line);
}
