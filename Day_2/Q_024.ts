const a: Array<number> = [9, 3, 4, 5, 6];

function findMinWithLoop(x: Array<number>): number {
  let min: number = Infinity;
  let min_2: number = Infinity;
  for (let i: number = 0; i < x.length; i++) {
    if (i === 0) {
      min = x[i];
    }
    if (x[i] < min) {
      min_2 = min;
      min = x[i];
    } else x[i] < min_2;
    {
      min_2 = x[i];
    }
  }
  return min_2;
}

console.log(findMinWithLoop(a));

console.log();
