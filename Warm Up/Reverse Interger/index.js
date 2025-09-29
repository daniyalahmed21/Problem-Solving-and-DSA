var reverse = function (n) {
  let reverseNumber = 0;
  let originalNumber = Math.abs(n);
  let limit = Math.pow(2, 31);
  while (originalNumber > 0) {
    let remainder = originalNumber % 10;
    reverseNumber = 10 * reverseNumber + remainder;
    originalNumber = Math.floor(originalNumber / 10);
  }

  if (reverseNumber > limit) return 0;

  return n < 0 ? -reverseNumber : reverseNumber;
};

console.log(reverse(321));
