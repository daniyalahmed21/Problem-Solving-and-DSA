var maxPathSum = function (root) {
  let maxPathSum = -Infinity;
  let currMax = 0;
  function Traversal(currRoot) {
    if (!currRoot) return 0;
    let leftMax = Math.max(Traversal(currRoot.left), 0);
    let rightMax = Math.max(Traversal(currRoot.right), 0);
    currMax = currRoot.val + leftMax + rightMax;
    maxPathSum = Math.max(currMax, maxPathSum);
    return currRoot.val + Math.max(leftMax, rightMax);
  }
  Traversal(root);
  return maxPathSum;
};
