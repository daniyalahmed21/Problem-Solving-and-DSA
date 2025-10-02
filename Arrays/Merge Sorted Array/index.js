var merge = function (nums1, m, nums2, n) {
  let p1 = 0;
  let p2 = 0;
  let nums3 = [];

  while (p1 < m && p2 < n) {
    if (nums1[p1] < nums2[p2]) {
      nums3.push(nums1[p1]);
      p1++;
    } else {
      nums3.push(nums2[p2]);
      p2++;
    }
  }

  // Add remaining elements
  while (p1 < m) {
    nums3.push(nums1[p1]);
    p1++;
  }

  while (p2 < n) {
    nums3.push(nums2[p2]);
    p2++;
  }

  return nums3;
};




let nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3

console.log(merge([1,2,3,0,0,0], 3, [2,5,6], 3));
