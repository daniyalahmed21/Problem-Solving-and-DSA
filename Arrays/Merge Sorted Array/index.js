var merge = function (nums1, m, nums2, n) {
  let p1 = 0; // pointer for nums1copy
  let p2 = 0; // pointer for nums2
  let p = 0;  // pointer for writing into nums1

  let nums1copy = nums1.slice(0, m);

  while (p1 < m && p2 < n) {
    if (nums1copy[p1] <= nums2[p2]) {
      nums1[p] = nums1copy[p1];
      p1++;
    } else {
      nums1[p] = nums2[p2];
      p2++;
    }
    p++;
  }

  // Add remaining elements from nums1copy
  while (p1 < m) {
    nums1[p] = nums1copy[p1];
    p1++;
    p++;
  }

  // Add remaining elements from nums2
  while (p2 < n) {
    nums1[p] = nums2[p2];
    p2++;
    p++;
  }
};


let nums1 = [1, 2, 3, 0, 0, 0],
  m = 3,
  nums2 = [2, 5, 6],
  n = 3;

merge(nums1, m, nums2, n);
console.log(nums1);
