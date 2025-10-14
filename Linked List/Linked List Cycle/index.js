// var hasCycle = function(head) {
//     const seenNodes = new Set();
//     let curr = head

//     while (curr != null){
//         if(seenNodes.has(curr)){
//             return true
//         }

//         seenNodes.add(curr)
//         curr = curr.next;
//     }

//     return false
// };

var hasCycle = function (head) {
  if (!head) return false;
  let slow = head;
  let fast = head.next;

  while (slow !== fast) {
    if (fast === null || fast.next === null) {
      return false;
    }

    slow = slow.next;
    fast = fast.next.next;
  }

  return true;
};
