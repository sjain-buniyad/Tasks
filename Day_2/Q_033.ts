const a: Array<any> = [1, 2, 3, 4];

function rotateLeft(x: Array<any>): Promise<Array<any>> {
  const element: number = x.pop();
  const arr: Array<any> = [element, ...x];
  return arr;
}

console.log(rotateLeft(a));
