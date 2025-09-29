function countDigits(n) {
    let count = 0;
    while (n > 0) {
      n = Math.floor(n / 10);
      count += 1;
    }
    return count;
}

console.log(countDigits(12345));