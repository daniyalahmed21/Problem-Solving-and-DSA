class PriorityQueue {
  constructor() {
    this.heap = [];
  }

  getParent(i) {
    return Math.floor((i - 1) / 2);
  }

  getLeft(i) {
    return 2 * i + 1;
  }

  getRight(i) {
    return 2 * i + 2;
  }

  // Insert value into PQ
  push(value) {
    this.heap.push(value);
    this.heapifyUp(this.heap.length - 1);
  }

  // Remove highest priority (smallest)
  pop() {
    if (this.heap.length === 0) return null;

    const top = this.heap[0];
    const last = this.heap.pop();

    if (this.heap.length > 0) {
      this.heap[0] = last;
      this.heapifyDown(0);
    }

    return top;
  }

  // Peek smallest
  peek() {
    return this.heap.length === 0 ? null : this.heap[0];
  }

  // Fix upward
  heapifyUp(i) {
    while (i > 0) {
      let parent = this.getParent(i);

      if (this.heap[parent] > this.heap[i]) {
        [this.heap[parent], this.heap[i]] = [this.heap[i], this.heap[parent]];
        i = parent;
      } else {
        break;
      }
    }
  }

  // Fix downward
  heapifyDown(i) {
    let smallest = i;

    while (true) {
      let left = this.getLeft(i);
      let right = this.getRight(i);

      if (left < this.heap.length && this.heap[left] < this.heap[smallest]) {
        smallest = left;
      }
      if (right < this.heap.length && this.heap[right] < this.heap[smallest]) {
        smallest = right;
      }

      if (smallest !== i) {
        [this.heap[i], this.heap[smallest]] = [
          this.heap[smallest],
          this.heap[i],
        ];
        i = smallest;
      } else {
        break;
      }
    }
  }

  isEmpty() {
    return this.heap.length === 0;
  }
}

const pq = new PriorityQueue();

pq.push(10);
pq.push(5);
pq.push(20);
pq.push(3);

console.log(pq.pop()); // 3
console.log(pq.pop()); // 5
console.log(pq.pop()); // 10
console.log(pq.pop()); // 20
