class MinHeap {
  constructor() {
    this.heap = [];
  }

  getLeftIndex(i) {
    return i * 2 + 1;
  }

  getRightIndex(i) {
    return i * 2 + 2;
  }

  getParentIndex(i) {
    return Math.floor((i - 1) / 2);
  }

  insertElement(val) {
    this.heap.push(val);
    let lastIndex = this.heap.length - 1;
    this.heapifyUp(lastIndex);
  }

  heapifyUp(i) {
    while (i > 0) {
      let parentIndex = this.getParentIndex(i);
      if (this.heap[parentIndex] > this.heap[i]) {
        [this.heap[i], this.heap[parentIndex]] = [
          this.heap[parentIndex],
          this.heap[i],
        ];
        i = parentIndex;
      } else {
        break;
      }
    }
  }

  extractMin() {
    if (this.heap.length < 1) return null;
    let lastIndex = this.heap.length - 1;
    [this.heap[0], this.heap[lastIndex]] = [this.heap[lastIndex], this.heap[0]];
    let min = this.heap.pop();
    this.heapifyDown(0);

    return min;
  }

  heapifyDown(i) {
    let rightIndex = this.getRightIndex(i);
    let leftIndex = this.getLeftIndex(i);
    let n = this.heap.length;
    let smallest = i;

    if (leftIndex < n && this.heap[smallest] > this.heap[leftIndex]) {
      smallest = leftIndex;
    }
    if (rightIndex < n && this.heap[smallest] > this.heap[rightIndex]) {
      smallest = rightIndex;
    }

    if (smallest !== i) {
      [this.heap[i], this.heap[smallest]] = [this.heap[smallest], this.heap[i]];
      this.heapifyDown(smallest); // Recursively heapify down the smallest child
    }
  }
}

let heap = new MinHeap();

heap.insertElement(10);
heap.insertElement(25);
heap.insertElement(12);
heap.insertElement(15);

console.log(heap.heap); // Check heap structure after inserts

console.log(heap.extractMin()); // Should print 10

console.log(heap.heap); // Check heap structure after extraction
