const a: Array<any> = [1, 2, 3, 4, 7, 9];

function countOddEven(arr: Array<any>): void {
  let count_odd: number = 0;
  let count_even: number = 0;
  for (let i: number = 0; i < arr.length; i++) {
    if (a[i] % 2 === 0) {
      count_even += 1;
    } else {
      count_odd += 1;
    }
  }

  return { count_even, count_odd };
}

console.log(countOddEven(a));
