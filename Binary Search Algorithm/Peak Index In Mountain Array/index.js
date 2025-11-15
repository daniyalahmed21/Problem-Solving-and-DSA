/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function (arr) {
  let right = arr.length - 1;
  let left = 0;
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);

    if (arr[mid + 1] > arr[mid]) {
      left = mid + 1;
    } else {
      right = mid ;
    }
  }

  return left;
};

let arr = [18,29,38,59,98,100,99,98,90]
console.log(peakIndexInMountainArray(arr));
