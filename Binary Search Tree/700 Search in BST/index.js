var searchBST = function (root, val) {
    if (!root) return null

    function Traverse(node, val) {
        if (!node) return null
        if (node.val === val) {
            return node
        } else if (node.val > val) {
           return Traverse(node.left, val)
        } else if (node.val < val) {
           return Traverse(node.right, val)
        }
    }
    return Traverse(root, val)
};