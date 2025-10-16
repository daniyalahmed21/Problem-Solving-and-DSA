var removeElements = function(head, val) {
    if (!head) return null;
    let prev = head
    let current = head.next;

    while (head && head.val === val) {
        head = head.next;
        prev = head;
        current = head ? head.next : null;
    }
   

    while (current) {
        if (current.val === val) {
            prev.next = current.next;
            current = current.next;
        } else {
            prev = current;
            current = current.next;
        }
    }

    return head;
};