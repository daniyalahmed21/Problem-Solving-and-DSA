var rotateRight = function(head, k) {
    if (!head || !head.next || k === 0) return head;

    // Step 1: Find the length and tail
    let length = 1;
    let current = head;
    while (current.next) {
        length++;
        current = current.next;
    }

    // Step 2: Make it circular
    current.next = head;

    // Step 3: Compute effective rotations
    k = k % length;
    let stepsToNewHead = length - k;

    // Step 4: Move to the new tail
    let newTail = head;
    for (let i = 1; i < stepsToNewHead; i++) {
        newTail = newTail.next;
    }

    // Step 5: Break the circle
    const newHead = newTail.next;
    newTail.next = null;

    return newHead;
};
