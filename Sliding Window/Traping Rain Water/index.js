var trap = function (height) {
  let ans = 0;
  let maxRightArr = [];
  let maxRight = 0;
  for (let i = height.length - 1; i >= 0; i--) {
    maxRight = Math.max(maxRight, height[i]);
    maxRightArr[i] = maxRight;
  }
  let maxLeft = 0;

  for (let i = 0; i < height.length; i++) {
    maxLeft = Math.max(maxLeft, height[i]); // update left max

    let minWall = Math.min(maxLeft, maxRightArr[i]); // choose smaller wall
    let trapped = minWall - height[i];

    if (trapped > 0) ans += trapped;
  }

  return ans;
};

let height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
console.log(trap(height));
