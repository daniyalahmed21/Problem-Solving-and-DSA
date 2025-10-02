var missingNumber = function (nums) {
  nums.sort((a, b) => a - b); 

  for (let i = 0; i <= nums.length; i++) {
    if (nums[i] !== i) {
      return i;
    }
  }
};

let nums = [3,0,1];
console.log(missingNumber(nums));
console.log(nums);
