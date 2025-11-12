/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function (arr) {
  let right = arr.length - 1;
  let left = 0;
  let peak = 0;
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    console.log(left, mid, right,arr[peak]);

    if (arr[mid + 1] > arr[mid]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }

    if (arr[mid] > arr[peak]) {
      peak = mid;
    }
  }

  return peak;
};

let arr = [18,29,38,59,98,100,99,98,90]
console.log(peakIndexInMountainArray(arr));
