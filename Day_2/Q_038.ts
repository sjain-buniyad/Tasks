const a: Array<any> = [1, 2, 2, 0, 0, 2];

let j: number = 0;
for (let i: number = 0; i < a.length; i++) {
  if (a[i] !== 0) {
    [a[i], a[j]] = [a[j], a[i]];
    j++;
  }
}

console.log(a);
