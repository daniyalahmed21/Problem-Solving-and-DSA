// function isPalindrome(x) {
//   var arr = x.toString().split("");
//   var start = 0;
//   var end = arr.length - 1;
//   var isPalindrome = true;
//   for (let index = 0; index < arr.length; index++) {
//     if (start <= end) {
//       if (arr[start] !== arr[end]) {
//         isPalindrome = false;
//       }
//       start++;
//       end--;
//     }
//   }
//   return isPalindrome;
// }

function isPalindrome(n) {
  let reverseNumber = 0;
  let originalNumber = n;

  if (n < 0) return false;

  while (n > 0) {
    let remainder = n % 10;
    reverseNumber = 10 * reverseNumber + remainder;
    n = Math.floor(n / 10);
  }

  return reverseNumber === originalNumber;
}
console.log(isPalindrome(110011));
