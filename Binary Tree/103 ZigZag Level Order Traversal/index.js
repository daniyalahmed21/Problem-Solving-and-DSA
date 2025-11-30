var zigzagLevelOrder = function (root) {
    let ans = []

    function Traverse(curr, level) {
        if (!curr) return []
        if (!ans[level]) ans[level] = []
        ans[level].push(curr.val)
        let left = Traverse(curr.left, level + 1)
        let right = Traverse(curr.right, level + 1)
    }
    Traverse(root, 0)
    for (let i = 0; i < ans.length; i++) {
        if (i % 2 !== 0) ans[i].reverse();
    }

    return ans
};