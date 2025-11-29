var hasPathSum = function (root, targetSum) {
  if (!root) return false;
  let ans = false;
  function Traverse(curr, prevSum) {
    let newSum = prevSum + curr.val;

    if (!curr.left && !curr.right && newSum === targetSum) {
      ans = true;
    }

    curr.left && Traverse(curr.left, newSum);
    curr.right && Traverse(curr.right, newSum);
  }

  Traverse(root, 0);

  return ans;
};

var hasPathSum = function (root, targetSum) {
  if (!root) return false;
  if (!root.left && !root.right) {
    return root.val === targetSum;
  }

  let leftSubTreeHasPathSum = hasPathSum(root.left, targetSum - root.val);
  let rightSubTreeHasPathSum = hasPathSum(root.right, targetSum - root.val);
  return leftSubTreeHasPathSum || rightSubTreeHasPathSum;
};
