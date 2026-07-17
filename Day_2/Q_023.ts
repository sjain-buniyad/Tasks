const a: Array<number> = [2, 3, 4, 5, 6];

function findMxWithLoop(x: Array<number>): number {
  let max: number = 0;
  let max_2: number = 0;
  for (let i: number = 0; i < x.length; i++) {
    if (x[i] > max) {
      max_2 = max;
      max = x[i];
    }
  }
  return max_2;
}

console.log(findMxWithLoop(a));
