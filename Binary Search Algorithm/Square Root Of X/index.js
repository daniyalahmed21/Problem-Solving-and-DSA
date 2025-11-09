var mySqrt = function (x) {
  if (x < 2) return x; // 0 or 1 case

  let left = 1;
  let right = x;
  let ans = 0;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let sq = mid * mid;

    if (sq === x) {
      return mid; 
    } else if (sq < x) {
      ans = mid;  
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return ans;
};


let x = 1;
console.log(mySqrt(x));
