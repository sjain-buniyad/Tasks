const a: Array<any> = [1, 2, 3, 5, 1, 3];

const set: Set<any> = new Set(a);
const arr: Array<any> = [...set];

console.log(arr);

// let set: Set<any> = new Set([]);
let duplicate: Set<any> = new Set([]);

for (let i: number = 0; i < a.length; i++) {
  if (set.has(a[i])) {
    duplicate.add(a[i]);
  } else {
    set.add(a[i]);
  }
}
