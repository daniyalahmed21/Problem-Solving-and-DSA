var maxDepth = function (root) {
    let maxDepth = 0
    let ans = [];

    function traverse(node, level) {
        if (!node) return;

        if (!ans[level]) ans[level] = [];

        ans[level].push(node.val);

        traverse(node.left, level + 1);
        traverse(node.right, level + 1);
    }
    traverse(root, 0)
    return ans.length ;
};