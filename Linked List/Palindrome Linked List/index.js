function isPalindrome(head) {
  let arr = [];
  let current = head;

  if (!head) return true;

  while (current !== null) {
    arr.push(current.value);
    current = current.next;
  }

  let i = 0;
  let j = arr.length - 1;

  while (i < j) {
    if (arr[i] !== arr[j]) return false;
    i++;
    j--;
  }

  return true;
}


function Node(val) {
  this.value = val;
  this.next = null;
}

let a = new Node(1);
let b = new Node(2);
let c = new Node(2);
let d = new Node(1);
a.next = b;
b.next = c;
c.next = d;

console.log(isPalindrome(a)); 
