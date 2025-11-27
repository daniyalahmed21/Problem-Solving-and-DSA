/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// var preorderTraversal = function (root) {
//   let ans = [];

//   function Traversal(currRoot) {
//     ans.push(currRoot.val);
//     if (currRoot.left) {
//       Traversal(currRoot.left);
//     }
//     if (currRoot.right) {
//       Traversal(currRoot.right);
//     }
//   }

//   root && Traversal(root);

//   return ans;
// };

var preorderTraversal = function (root) {
  let ans = [];
  let stack = [];
  if (!root) {
    return [];
  }
  stack.push(root[0]);
  while (stack.length >= 1) {
    console.log(stack);
    let curr = stack.pop();
    console.log(curr);
    if (curr) {
      if (curr && curr.right) {
        stack.push(curr.right);
      }
      if (curr && curr.left) {
        stack.push(curr.left);
      }
      ans.push(curr.val);
    }
  }

  return ans;
};

let root = [1, 2, 3, 4, 5, null, 8, null, null, 6, 7, 9];

console.log(preorderTraversal(root));
