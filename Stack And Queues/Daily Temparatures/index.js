/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  let stack = [];      // stores indices
  let tempMap = [];    // stores results
  let n = temperatures.length;

  stack.push(n - 1);
  tempMap.push(0);

  for (let i = n - 2; i >= 0; i--) {
    // Pop smaller or equal temperatures
    while (
      stack.length &&
      temperatures[i] >= temperatures[stack[stack.length - 1]]
    ) {
      stack.pop();
    }

    // If stack not empty, we found a warmer day
    if (stack.length > 0) {
      tempMap.push(stack[stack.length - 1] - i);
    } else {
      tempMap.push(0);
    }

    // Push current index
    stack.push(i);
  }

  return tempMap.reverse();
};

// Example
let temperatures = [73, 74, 75, 71, 69, 72, 76, 73];
console.log(dailyTemperatures(temperatures)); // [1,1,4,2,1,1,0,0]
