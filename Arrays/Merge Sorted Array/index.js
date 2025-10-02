var merge = function (nums1, m, nums2, n) {
  let p1 = m - 1;
  let p2 = n - 1;
  let p = n + m - 1;

  while (p1 >= 0 && p2 >= 0) {
    if (nums2[p2] > nums1[p1]) {
      nums1[p] = nums2[p2];
      p2--;
    } else {
      nums1[p] = nums1[p1];
      p1--;
    }
    p--;
  }

  while(p2 >= 0) {
    nums1[p] = nums2[p2]
    p2--
    p--
  }
};

let nums1 = [1, 2, 5, 0, 0, 0],
  m = 3,
  nums2 = [2, 5, 6],
  n = 3;

merge(nums1, m, nums2, n);
console.log(nums1);
