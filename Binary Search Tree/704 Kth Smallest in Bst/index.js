
var kthSmallest = function (root, k) {
    let ans = null
    let count = k
    function Traverse(node) {
        if (ans) return
        if (!node) return
        Traverse(node.left)
        --count
        if (count === 0) {
            ans= node.val
        }
        Traverse(node.right)

    }
    Traverse(root)

    return ans
};