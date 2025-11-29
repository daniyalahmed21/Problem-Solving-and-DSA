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
