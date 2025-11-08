var nextGreaterElement = function (nums1, nums2) {
  let stack = [];
  let nge = [];
  let ans = [];
  let nums2copy = [...nums2];
  while (nums2.length > 0) {
    let top = stack[stack.length - 1];
    if (stack.length === 0) {
      nge.push(-1);
      stack.push(nums2[nums2.length - 1]);
      nums2.pop();
    } else if (nums2[nums2.length - 1] < top) {
      nge.push(top);
      stack.push(nums2[nums2.length - 1]);
      nums2.pop();
    } else if (nums2[nums2.length - 1] > top) {
      if (stack.length > 0) {
        stack.pop();
      } else {
        nge.push(-1);
        stack.push(top);
      }
    }
  }

  nge.reverse();

  while (nums1.length > 0) {
    let top = nums1[nums1.length - 1];

    let index = nums2copy.indexOf(top);
    ans.push(nge[index]);
    nums1.pop();
  }

  return ans.reverse();
};

let nums1 = [4, 1, 2],
  nums2 = [1, 3, 4, 2];
console.log(nextGreaterElement(nums1, nums2));
