// Node structure
var Node = function (value) {
  this.value = value;
  this.next = null;
};

// LinkedList class
var MyLinkedList = function () {
  this.head = null;
  this.size = 0;
};

// Get value at index
MyLinkedList.prototype.get = function (index) {
  if (index < 0) return -1;
  let current = this.head;
  let i = 0;

  while (current) {
    if (i === index) {
      return current.value;
    }
    current = current.next;
    i++;
  }

  return -1; // not found
};

// Add at head
MyLinkedList.prototype.addAtHead = function (val) {
  const newHead = new Node(val);  // fixed: val, not value
  newHead.next = this.head;
  this.head = newHead;
  this.size++;
};

// Add at tail
MyLinkedList.prototype.addAtTail = function (val) {
  const newNode = new Node(val); // fixed: val, not value

  if (!this.head) {
    this.head = newNode;
    this.size++;
    return;
  }

  let current = this.head;
  while (current.next) {
    current = current.next;
  }

  current.next = newNode;
  this.size++;
};

// Add at specific index
MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index < 0 || index > this.size) return;

  const newNode = new Node(val);

  if (index === 0) {
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
    return;
  }

  let current = this.head;
  let i = 0;

  while (current && i < index - 1) {
    current = current.next;
    i++;
  }

  if (!current) return;

  newNode.next = current.next;
  current.next = newNode;
  this.size++;
};

// Delete at specific index
MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index < 0 || index >= this.size) return;

  if (index === 0) {
    this.head = this.head.next;
    this.size--;
    return;
  }

  let current = this.head;
  let i = 0;

  while (current && i < index - 1) {
    current = current.next;
    i++;
  }

  if (!current || !current.next) return;

  current.next = current.next.next;
  this.size--;
};


let list = new MyLinkedList();

list.addAtHead(10);
list.addAtTail(20);
list.addAtTail(30);
list.addAtIndex(1, 15);  // list: 10 -> 15 -> 20 -> 30
list.deleteAtIndex(2);   // deletes 20

console.log(list.get(0)); // 10
console.log(list.get(1)); // 15
console.log(list.get(2)); // 30
