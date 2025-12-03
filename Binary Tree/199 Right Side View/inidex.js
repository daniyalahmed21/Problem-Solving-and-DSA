var rightSideView = function (root) {
    if (!root) return [];

    let levels = [];

    function Traverse(node, level) {
        if (!node) return;

        if (!levels[level]) levels[level] = [];
        levels[level].push(node.val);

        Traverse(node.left, level + 1);
        Traverse(node.right, level + 1);
    }

    Traverse(root, 0);

    // take the **last element** of each level
    return levels.map(level => level[level.length - 1]);
};
