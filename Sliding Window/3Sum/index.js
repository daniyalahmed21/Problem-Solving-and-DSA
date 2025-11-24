var threeSum = function (nums) {
  let target = 0;
  let ans = [];
  nums.sort((a, b) => a - b);

  for (let k = 0; k < nums.length - 2; k++) {
    if (k > 0 && nums[k] === nums[k - 1]) continue; // skip duplicate k

    let i = k + 1;
    let j = nums.length - 1;

    while (i < j) {
      let sum = nums[k] + nums[i] + nums[j];

      if (sum > target) {
        j--;
      } else if (sum < target) {
        i++;
      } else {
        ans.push([nums[k], nums[i], nums[j]]);

        i++;
        j--;

        // skip duplicates for i and j
        while (i < j && nums[i] === nums[i - 1]) i++;
        while (i < j && nums[j] === nums[j + 1]) j--;
      }
    }
  }

  return ans;
};

nums = [-1, 0, 1, 2, -1, -4];
console.log(threeSum(nums));


nums = [-1, 0, 1, 2, -1, -4];
console.log(threeSum(nums));
