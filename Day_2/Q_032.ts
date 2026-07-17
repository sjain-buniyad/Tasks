const a: Array<any> = [1, 2, 3, 4];

function rotateLeft(x: Array<any>): Promise<Array<any>> {
  const element: number = x.shift();
  x.push(element);
  return x;
}

console.log(rotateLeft(a));
