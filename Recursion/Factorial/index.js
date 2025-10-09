function Factorial(n) {
  if (n === 0 | n===1 ) return 1;

  return n * Factorial(n - 1);
}

let n = 6;
console.log(Factorial(n));
