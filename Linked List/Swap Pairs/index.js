// var swapPairs = function (head) {

//     const dummy = new ListNode(0);
//     dummy.next = head;
//     let prev = dummy;

//     while (head && head.next) {
//         let first = head;
//         let second = head.next;

//         first.next = second.next;
//         second.next = first;
//         prev.next = second;

//         prev = first;
//         head = first.next;
//     }
//     return dummy.next;
// };


var swapPairs = function (head) {
    if (!head || !head.next) return head;

    let first = head;
    let second = head.next;
    first.next = swapPairs(second.next);
    second.next = first

    return second;
};
