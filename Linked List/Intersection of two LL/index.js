var getIntersectionNode = function (headA, headB) {
  let hashMap = new Set();

  if (!headA || !headB) return null;

  let currentA = headA;
  let currentB = headB;

  while (currentB) {
    hashMap.add(currentB);
    currentB = currentB.next;
  }

  while (currentA) {
    if (hashMap.has(currentA)) return currentA;
    currentA = currentA.next;
  }

  return null;
};
