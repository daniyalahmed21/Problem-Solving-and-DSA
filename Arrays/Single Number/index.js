var singleNumber = function (nums) {
  let hashMap = {};
  for (let i = 0; i < nums.length; i++) {
    if (!hashMap[nums[i]]) {
      hashMap[nums[i]] = 1;
    } else {
      hashMap[nums[i]]++;
    }
  }
  for (let i = 0; i < nums.length; i++) {
    if (hashMap[nums[i]] === 1) {
      return nums[i];
    }
  }
};

let nums = [2, 2, 1];

console.log(singleNumber(nums));
