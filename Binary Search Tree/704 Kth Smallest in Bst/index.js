var kthSmallest = function (root, k) {
    let ans = []
    function Traverse(node){
        if (!node) return
        Traverse(node.left)
        ans.push(node.val)
        Traverse(node.right)

    }
    Traverse(root)

    return ans[k - 1]
};