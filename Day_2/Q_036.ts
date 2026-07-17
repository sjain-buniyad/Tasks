const a: Array<any> = [12, 3, 4, 5, 6, 3];

const fz = new Map();

for (let i: number = 0; i < a.length; i++) {
  let count: number = 0;
  for (let j: number = 0; j < a.length; j++) {
    if (a[i] === a[j]) {
      count += 1;
    }
  }
  fz.set(a[i], count);
}

console.log(fz);
