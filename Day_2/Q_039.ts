const a: Array<any> = [1, 2, 3, 5, 1, 3];
const b: Array<any> = [2, 44, 5, 6];

const set_a: Set<any> = new Set(a);
const set_b: Set<any> = new Set(b);

const u: Set<any> = set_a.intersection(set_b);

const arr: Array<any> = [...u];
console.log(arr);
