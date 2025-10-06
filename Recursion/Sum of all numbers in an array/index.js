function Sum(n) {
  if (n === 0) return arr[0];
  return arr[n] + Sum(n - 1);
}

let arr = [1, 2, 3, 4, 5];

console.log(Sum(arr.length - 1));
