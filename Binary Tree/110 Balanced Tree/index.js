var isBalanced = function (root) {
    let ans = true
    function Traverse(curr) {
        if (!curr) return 0
        let leftHeight = Traverse(curr.left)
        let rightHeight = Traverse(curr.right)

        if (Math.abs(leftHeight - rightHeight > 1)) {
            ans = ans && false
        }
        return 1 + Math.max(leftHeight, rightHeight)

    };

    Traverse(root)
    return ans
}