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
// var inorderTraversal = function(root) {
//     let ans = []
//     function Traversal (currRoot){
//         if(!currRoot) return
//         Traversal(currRoot.left)
//         ans.push(currRoot.val)
//         Traversal(currRoot.right)
//     }

//     Traversal(root)

//     return ans
// };

var inorderTraversal = function(root) {
    let ans = [];
    let stack = [];
    let curr = root;
    
    while (curr || stack.length > 0) {
        // Go as left as possible
        while (curr) {
            stack.push(curr);
            curr = curr.left;
        }
        
        // Pop the node and process it
        curr = stack.pop();
        ans.push(curr.val);
        
        // Now process the right subtree
        curr = curr.right;
    }
    
    return ans;
};
