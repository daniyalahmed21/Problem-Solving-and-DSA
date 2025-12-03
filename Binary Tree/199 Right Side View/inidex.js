var rightSideView = function (root) {
  if (!root) return [];

  let levels = [];

  function Traverse(node, level) {
    if (!node) return;

    if (!levels[level]) levels[level] = [];
    levels[level].push(node.val);

    Traverse(node.left, level + 1);
    Traverse(node.right, level + 1);
  }

  Traverse(root, 0);

  // take the **last element** of each level
  return levels.map((level) => level[level.length - 1]);
};


var rightSideView = function (root) {
  if (!root) return [];
  let ans = [];
  let q = [root];
  while (q.length) {
    let levelSize = q.length;
    for (let i = 0; i < levelSize; i++) {
      let curr = q.shift();

      i === 0 && ans.push(curr.val);
      curr.right && q.push(curr.right);
      curr.left && q.push(curr.left);
    }
  }
  return ans
};
