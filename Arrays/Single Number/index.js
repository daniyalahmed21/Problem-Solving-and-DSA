var singleNumber = function (nums) {
  let xor = 0;
  for (let i = 0; i < nums.length; i++) {
    xor = xor ^ nums[i];
  }
  return xor
};

let nums = [4, 1, 2, 1, 2];

console.log(singleNumber(nums));
console.log(nums);
