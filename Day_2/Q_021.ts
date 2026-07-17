const a: Array<number> = [2, 3, 4, 5, 6];

function findMax(x: Array<number>) {
  return Math.max(...x);
}

function findMxWithLoop(x: Array<number>): number {
  let max: number = 0;
  for (let i: number = 0; i < x.length; i++) {
    if (x[i] > max) {
      max = x[i];
    }
  }
  return max;
}

console.log(findMax(a));
console.log(findMxWithLoop(a));
