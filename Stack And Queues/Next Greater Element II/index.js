var nextGreaterElements = function (nums) {
  let n = nums.length;
  let ans = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (nums[i] < nums[(i + j) % n]) {
        ans.push(nums[(i + j) % n]);
        break;
      }
    }
    if (ans.length === i ) {
      ans.push(-1);
    }
  }
  return ans;
};

// Example usage:
let nums = [1, 2, 3, 4, 3];
console.log(nextGreaterElements(nums)); // [2,3,4,-1,4]
