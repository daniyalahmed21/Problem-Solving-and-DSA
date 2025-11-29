var hasPathSum = function (root, targetSum) {
     if (!root) return false
    let ans = false
    function Traverse(curr, prevSum) {
        let newSum = prevSum + curr.val

        if (!curr.left && !curr.right && newSum === targetSum) {
            ans = true
        }

        curr.left && Traverse(curr.left, newSum)
        curr.right && Traverse(curr.right, newSum)
    }

    Traverse(root, 0)

    return ans
};