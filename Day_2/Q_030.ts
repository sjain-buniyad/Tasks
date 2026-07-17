const a: Array<any> = [1, 2, 3, 5, 1, 3];
const b: Array<any> = [2, 44, 5, 6];

const set_a: Set<any> = new Set(a);
const set_b: Set<any> = new Set(b);

const u: Set<any> = set_a.intersection(set_b);

const arr: Array<any> = [...u];

console.log(arr);

// let set: Set<any> = new Set([]);
let duplicate: Set<any> = new Set([]);

for (let i: number = 0; i < a.length; i++) {
  if (set_a.has(a[i])) {
    duplicate.add(a[i]);
  } else {
    set_a.add(a[i]);
  }
}
