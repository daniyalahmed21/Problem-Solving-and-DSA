/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  let queue = [];
  let max = [];
  let i = 0;
  let j = 0;

  while (j < nums.length) {
    while (queue.length && nums[j] > queue[queue.length - 1]) {
      queue.pop();
    }

    queue.push(nums[j]);

    if (j >= k - 1) {
      max.push(queue[0]);

      if (nums[i] === queue[0]) {
        queue.shift();
      }

      i++;
    }

    j++;
  }
  return max;
};
