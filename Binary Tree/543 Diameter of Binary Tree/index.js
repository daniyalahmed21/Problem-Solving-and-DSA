var diameterOfBinaryTree = function (root) {
    let ans = 0
    function Traverse(curr) {
        if (!curr) return 0
        let leftHeight = Traverse(curr.left)
        let rightHeight = Traverse(curr.right)
        ans = ans < leftHeight + rightHeight ? leftHeight + rightHeight : ans
        return 1 + Math.max(leftHeight, rightHeight)
    };
    Traverse(root)
    return ans
};