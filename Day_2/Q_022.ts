const a: Array<number> = [2, 3, 4, 5, 6];

function findMin(x: Array<number>) {
  return Math.min(...x);
}

function findMinWithLoop(x: Array<number>): number {
  let min: number;
  for (let i: number = 0; i < x.length; i++) {
    if (i === 0) {
      min = x[i];
    }
    if (x[i] < min) {
      min = x[i];
    }
  }
  return min;
}

console.log(findMin(a));
console.log(findMinWithLoop(a));
