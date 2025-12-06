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
}

let heap = new MinHeap();

heap.insertElement(10);
heap.insertElement(25);
heap.insertElement(12);
heap.insertElement(15);

console.log(heap.heap);
