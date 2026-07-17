const a: Array<any> = [1, 2, 3, 4];

function maxSum(arr: Array<any>): Promise<Array<any>> {
  let max_sum: number = 0;
  for (let i: number = 0; i < arr.length; i++) {
    for (let j: number = i; j < arr.length; j++) {
      if (i === j) {
        continue;
      }
      const sum = a[i] + a[j];
      if (sum > max_sum) {
        max_sum = sum;
      }
    }
  }
  return max_sum;
}

console.log(maxSum(a));
