const a: Array<T> = [2, 3, 53, 1, 4];

function sort(x: Array<number>): Array<number> {
  let n: number = x.length;
  let y: Array<T> = [];
  for (let i: number = 0; i < n; i++) {
    let max: number = Math.max(...x);
    y.push(max);
    const max_target: number = x.indexOf(max);
    x.splice(max_target, 1);
  }
  return y;
}

console.log("the sort is ", sort(a));
