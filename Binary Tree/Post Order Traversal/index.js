// var postorderTraversal = function(root) {
//     if (!root) return [];

//     let ans = [];
//     let stack = [root];

//     while (stack.length > 0) {
//         let curr = stack.pop();
//         ans.push(curr.val); // push root first
//         if (curr.left) stack.push(curr.left); // left child pushed after right
//         if (curr.right) stack.push(curr.right);
//     }

//     return ans.reverse();
// };


// var postorderTraversal = function(root) {
//     if (!root) return [];

//     let ans = [];
//     let s1 = [root];
//     let s2 = []

//     while (s1.length > 0) {
//         let curr = s1.pop();
//         s2.push(curr.val)
//         curr.left && s1.push(curr.left); 
//         curr.right && s1.push(curr.right);
//     }

//     return s2.reverse();
// };
var postorderTraversal = function(root) {
    if (!root) return [];

    let ans = [];
    let stack = [];
    let curr = root;
    let lastVisited = null;

    while (curr || stack.length > 0) {
        while (curr) {
            stack.push(curr);
            curr = curr.left;
        }

        let peakNode = stack[stack.length - 1];

        // go right if right not processed yet
        if (peakNode.right && lastVisited !== peakNode.right) {
            curr = peakNode.right;
        } else {
            ans.push(peakNode.val);
            lastVisited = peakNode;
            stack.pop();
        }
    }

    return ans;
};
