var isSymmetric = function (root) {
    if (!root) return true;

    function isMirror(leftTree, rightTree) {
        if (!leftTree && !rightTree) return true;
        if (!leftTree || !rightTree) return false;

        return leftTree.val === rightTree.val &&
               isMirror(leftTree.left, rightTree.right) &&
               isMirror(leftTree.right, rightTree.left);
    }

    return isMirror(root.left, root.right);
};

var isSymmetric = function (root) {
    if (!root) return true;

    let queue = [root.left, root.right];

    while (queue.length) {
        let p1 = queue.shift();
        let p2 = queue.shift();

        // If both are null, continue checking next pair
        if (!p1 && !p2) continue;

        // If one is null or their values differ ⇒ not symmetric
        if (!p1 || !p2 || p1.val !== p2.val) return false;

        // Push children in mirrored order
        queue.push(p1.left, p2.right);
        queue.push(p1.right, p2.left);
    }

    return true;
};
