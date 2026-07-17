const a: Array<any> = [1, 2, 2, 4];

function findMissing(x: Array<any>): Promise<Array<any>> {
  let missing: Array<any> = [];
  x.sort();
  let count: number = x[0];
  for (let i: number = 0; i < x.length; i++) {
    if (x[i] !== count) {
      missing.push(count);
    }
    count += 1;
  }
  return missing;
}

console.log(findMissing(a));
