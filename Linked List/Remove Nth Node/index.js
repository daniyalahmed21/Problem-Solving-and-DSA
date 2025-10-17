var removeNthFromEnd = function (head, n) {
  if (!head) return;
  let length = 0;
  let sentinel = new ListNode();
  sentinel.next = head;

  while (head) {
    head = head.next;
    length++;
  }

  let prevPosition = length - n;
  let prev = sentinel;
  for (let i = 0; i < prevPosition; i++) {
    prev = prev.next;
  }

  prev.next = prev.next.next;

  return sentinel.next;
};
