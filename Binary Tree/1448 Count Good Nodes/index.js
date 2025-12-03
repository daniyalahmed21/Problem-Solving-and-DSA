var goodNodes = function (root) {
  if (!root) return 0;
  let ans = 0;

  function Traverse(root, prevMax) {
    let max = prevMax;

    if (root.val >= max) {
      ans++;
      max = root.val;
    }

    root.right && Traverse(root.right , max)
    root.left && Traverse(root.left , max)
  }
  Traverse(root, root.val);
  return ans;
};