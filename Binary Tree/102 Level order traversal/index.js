// var levelOrder = function (root) {
//     if (!root) return []
//     let queue = [root]
//     let ans = []
//     while (queue.length > 0) {
//         let level = []
//         let levelSize = queue.length
//         for (let i = 0; i < levelSize; i++) {
//             let curr = queue.shift()
//             curr.left && queue.push(curr.left)
//             curr.right && queue.push(curr.right)
//             level.push(curr.val)
//         }
//         ans.push(level)
//     }
//     return ans
// };


// var levelOrder = function (root) {
//     if (!root) return [];

//     let ans = [];

//     function traverse(node, level) {
//         if (!node) return;

//         if (!ans[level]) ans[level] = [];

//         ans[level].push(node.val);

//         traverse(node.left, level + 1);
//         traverse(node.right, level + 1);
//     }

//     traverse(root, 0);
//     return ans;
// };
