var connect = function (root) {
    if (!root) return root;

    let q = [root];

    while (q.length) {
        let size = q.length;

        for (let i = 0; i < size; i++) {
            let curr = q.shift();

            // next is the next item in the queue but only inside this level
            curr.next = (i === size - 1) ? null : q[0];

            if (curr.left) q.push(curr.left);
            if (curr.right) q.push(curr.right);
        }
    }

    return root;
};
