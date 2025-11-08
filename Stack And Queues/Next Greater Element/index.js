// var nextGreaterElement = function (nums1, nums2) {
//   let stack = [];
//   let nge = [];
//   let ans = [];
//   let nums2copy = [...nums2];
//   while (nums2.length > 0) {
//     let top = stack[stack.length - 1];
//     if (stack.length === 0) {
//       nge.push(-1);
//       stack.push(nums2[nums2.length - 1]);
//       nums2.pop();
//     } else if (nums2[nums2.length - 1] < top) {
//       nge.push(top);
//       stack.push(nums2[nums2.length - 1]);
//       nums2.pop();
//     } else if (nums2[nums2.length - 1] > top) {
//       if (stack.length > 0) {
//         stack.pop();
//       } else {
//         nge.push(-1);
//         stack.push(top);
//       }
//     }
//   }

//   nge.reverse();

//   while (nums1.length > 0) {
//     let top = nums1[nums1.length - 1];

//     let index = nums2copy.indexOf(top);
//     ans.push(nge[index]);
//     nums1.pop();
//   }

//   return ans.reverse();
// };

var nextGreaterElement = function (nums1, nums2) {
  let stack = [];
  let ngeMap = {};
  let n = nums2.length;

  stack.push(nums2[n - 1]);
  ngeMap[nums2[n - 1]] = -1;

  for (let i = n - 2; i < n; i--) {
    while (stack.length) {
      if (stack[stack.length - 1] > nums2[i]) {
        stack.push(nums2[i]);
        ngeMap[nums2[i]] = stack[stack.length - 1];
      } else {
        stack.pop();
      }
    }

    if (stack.length === 0) {
      ngeMap[nums2[i]] = -1;
    }

    stack.push(nums2[i]);
  }

  return nums1.map(x=> ngeMap[x])
};

let nums1 = [4, 1, 2],
  nums2 = [1, 3, 4, 2];
console.log(nextGreaterElement(nums1, nums2));
