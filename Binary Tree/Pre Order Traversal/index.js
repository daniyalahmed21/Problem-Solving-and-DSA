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
var preorderTraversal = function(root) {
    let ans = []

    function Traversal (currRoot){
        ans.push(currRoot.val)
        if(currRoot.left){
            Traversal(currRoot.left)
        }
        if (currRoot.right){
            Traversal(currRoot.right)
        }
    }

    root && Traversal(root)

    return ans
};