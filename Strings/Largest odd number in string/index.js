var largestOddNumber = function (num) {
  let n = num.length - 1;
  while (n >= 0) {
    console.log((num[n]), n);
    if (Number(num[n]) % 2 !== 0) {
      return num.substring(0, n+1);
    }
    n--;
  }
  return ""
};

let num = "4206";

console.log(largestOddNumber(num));
