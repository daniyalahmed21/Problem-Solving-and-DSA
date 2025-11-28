var levelOrder = function (root) {
    if (!root) return []
    let queue = [root]
    let ans = []
    while (queue.length > 0) {
        let level = []
        let levelSize = queue.length
        for (let i = 0; i < levelSize; i++) {
            let curr = queue.shift()
            curr.left && queue.push(curr.left)
            curr.right && queue.push(curr.right)
            level.push(curr.val)
        }
        ans.push(level)
    }
    return ans
};