const a: Array<any> = [1, 2, 3, 4];
const b: Array<any> = [23, 4, 5, 1];

function merge(x: Array<any>, y: Array<any>): Promise<Array<any>> {
  return [...x, ...y];
}

console.log(a.concat(b));
console.log(merge(a, b));
