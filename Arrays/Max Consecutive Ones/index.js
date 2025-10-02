var findMaxConsecutiveOnes = function (nums) {
  let currentMax = 0;
  let overallMax = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      currentMax++;
      overallMax = Math.max(overallMax, currentMax);
    } else {
      currentMax = 0;
    }
  }

  return overallMax;
};


let nums = [1, 1, 0, 1, 1, 1];

console.log(findMaxConsecutiveOnes(nums));
