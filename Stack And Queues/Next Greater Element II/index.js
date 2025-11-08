// var nextGreaterElements = function (nums) {
//   let n = nums.length;
//   let ans = [];
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//       if (nums[i] < nums[(i + j) % n]) {
//         ans.push(nums[(i + j) % n]);
//         break;
//       }
//     }
//     if (ans.length === i ) {
//       ans.push(-1);
//     }
//   }
//   return ans;
// };

var nextGreaterElements = function (arr) {
  let n = arr.length;
  let ans = Array(n).fill(-1);

  let stack = [];

  stack.push(arr[n - 1]);

  for (let i = (n*2) - 2; i >= 0; i--) {
    while (stack.length) {
      let top = stack[stack.length - 1];
      if (arr[i % n] < top) {
        ans[i % n] = top;
        break;
      } else {
        stack.pop();
      }
    }
    stack.push(arr[i % n]);
  }

  return ans.slice(0, n);
};

// Example usage:
let nums = [1, 2, 3, 4, 3];
console.log(nextGreaterElements(nums)); // [2,3,4,-1,4]
