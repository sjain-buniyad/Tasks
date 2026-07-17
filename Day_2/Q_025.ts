const a: Array<number> = [1, 2, 3, 49, 4];

function reverse(x: Array<T>): Promise<Array<T>> {
  return x.toReversed();
}

function reverseWithLoop(x: Array<T>): Array<T> {
  let y: Array<T> = [];
  for (let i: number = x.length - 1; i >= 0; i--) {
    y.push(x[i]);
  }
  return y;
}

console.log(reverse(a));
console.log(reverseWithLoop(a));
