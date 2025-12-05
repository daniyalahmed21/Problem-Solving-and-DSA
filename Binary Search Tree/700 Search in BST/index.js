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

var searchBST = function (root, val) {
    if (!root) return null
    if (root.val === val) {
        return root
    }
    return root.val > val ? searchBST(root.left, val) : searchBST(root.right, val)
};