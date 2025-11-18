var getIntersectionNode = function (headA, headB) {
    let PA = headA
    let PB = headB

    while (PA !== PB) {
        PA = PA === null ? headB : PA.next
        PB = PB === null ? headA : PB.next
    }

    return PA
};

// var getIntersectionNode = function (headA, headB) {
//   let hashMap = new Set();

//   if (!headA || !headB) return null;

//   let currentA = headA;
//   let currentB = headB;

//   while (currentB) {
//     hashMap.add(currentB);
//     currentB = currentB.next;
//   }

//   while (currentA) {
//     if (hashMap.has(currentA)) return currentA;
//     currentA = currentA.next;
//   }

//   return null;
// };

// var getIntersectionNode = function (headA, headB) {
//   if (!headA || !headB) return null;

//   let currentA = headA;
//   let currentB = headB;

//   let n = 0;
//   while (currentA) {
//     n++;
//     currentA = currentA.next;
//   }

//   let m = 0;
//   while (currentB) {
//     m++;
//     currentB = currentB.next;
//   }

//   let diff = Math.abs(n- m);

//   if(n>m){
//     let temp = headA
//     headA = headB
//     headB = temp
//   }

//   for (let i = 0; i < diff; i++) {
//    headB = headB.next
//   }

//   currentA = headA;
//   currentB = headB;

//   while(currentA !== currentB){
//     currentA = currentA.next
//     currentB = currentB.next
//   }

//   return currentA
// };


