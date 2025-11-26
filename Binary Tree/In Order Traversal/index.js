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
var inorderTraversal = function(root) {
    let ans = []
    function Traversal (currRoot){
        if(!currRoot) return
        Traversal(currRoot.left)
        ans.push(currRoot.val)
        Traversal(currRoot.right)
    }

    Traversal(root)

    return ans
};