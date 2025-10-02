var moveZeroes = function (nums) {
  let p1 = 0;
  let p2 = 1;

  while (p1 <= nums.length - 1 && p2 <= nums.length - 1) {
    if (nums[p1] === 0) {
      if (nums[p2] !== 0) {
        nums[p1] = nums[p2];
        nums[p2] = 0;
      } else {
        p2++;
      }
    } else {
      p1++;
      p2++
    }
  }
};

let nums = [4,2,4,0,0,3,0,5,1,0]

moveZeroes(nums);
console.log(nums);
