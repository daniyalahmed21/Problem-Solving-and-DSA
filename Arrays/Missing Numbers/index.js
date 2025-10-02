var missingNumber = function(nums) {
  let n = nums.length;
  let expectedSum = (n * (n + 1)) / 2;
  let actualSum = nums.reduce((a, b) => a + b, 0);
  return expectedSum - actualSum;
};


let nums = [3,0,1];
console.log(missingNumber(nums));
console.log(nums);
