var isValidBST = function (root) {
  let ans = true;
  function Traverse(node, low, high) {
    if (!node) return true;

    if (
      (low !== null && node.val <= low) ||
      (high !== null && node.val >= high)
    ) {
      ans = false;
    }
    Traverse(node.left, low, node.val);
    Traverse(node.right, node.val, high);
  }
  Traverse(root, null, null);
  return ans;
};
