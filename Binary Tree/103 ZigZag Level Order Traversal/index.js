// var zigzagLevelOrder = function (root) {
//     let ans = []

//     function Traverse(curr, level) {
//         if (!curr) return []
//         if (!ans[level]) ans[level] = []
//         ans[level].push(curr.val)
//         let left = Traverse(curr.left, level + 1)
//         let right = Traverse(curr.right, level + 1)
//     }
//     Traverse(root, 0)
//     for (let i = 0; i < ans.length; i++) {
//         if (i % 2 !== 0) ans[i].reverse();
//     }

//     return ans
// };

var zigzagLevelOrder = function (root) {
    if (!root) return []
    let q = [root]
    let ans = []
    while (q.length) {
        let lvlArray = []
        let lvlSize = q.length
        for (let i = 0; i < lvlSize; i++) {
            let curr = q.shift();
            if ((ans.length + 1) % 2) {
                lvlArray.push(curr.val)

            } else {
                lvlArray.unshift(curr.val)
            }
            curr.left && q.push(curr.left)
            curr.right && q.push(curr.right)
        }
        ans.push(lvlArray)
    }
    return ans
};