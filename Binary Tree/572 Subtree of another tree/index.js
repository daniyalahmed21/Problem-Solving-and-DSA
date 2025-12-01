var isSubtree = function (root, subRoot) {
    if (!root) return false;

    function isSameTree(p, q) {
        if (!p && !q) return true;
        if (!p || !q) return false;

        return (
            p.val === q.val &&
            isSameTree(p.left, q.left) &&
            isSameTree(p.right, q.right)
        );
    }

    if (isSameTree(root, subRoot)) return true;

    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};

var isSubtree = function (root, subRoot) {
    let rootHash = buildHash(root);
    let subHash = buildHash(subRoot);
    return rootHash.includes(subHash);
};

function buildHash(node) {
    let str = "-";
    let stack = [node];
    while (stack.length) {
        let curr = stack.pop();
        if (!curr) {
            str += "X-";
        } else {
            str += curr.val + "-";
            stack.push(curr.right);
            stack.push(curr.left);
        }
    }
    return str;
}