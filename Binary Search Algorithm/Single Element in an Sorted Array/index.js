/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function (nums) {
  let l = 0;
  let r = nums.length - 1;
  while (l <= r) {
    let mid = l + Math.floor((r-l) / 2);
    console.log(l,mid,r);
    //pair on left side
    if (nums[mid] === nums[mid - 1]) {
      let leftCount = mid - 1 - l;
      if (leftCount % 2 === 1) {
        r = mid - 2;
      } else {
        l = mid + 1;
      }
    } else if (nums[mid] === nums[mid + 1]) {
      let leftCount = mid - l;
      if (leftCount % 2 === 1) {
        r = m - 1;
      } else {
        l = mid + 2;
      }
    } else {
      return nums[mid];
    }
  }
};

let nums =
[1,1,2,3,3,4,4,8,8]

console.log(singleNonDuplicate(nums));