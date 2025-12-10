/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
    this.heap = new MaxPriorityQueue();
    
    for (let i = 0; i < stones.length; i++) {
        this.heap.enqueue(stones[i]);
    }
    while (this.heap.size()>1) {

        let x = this.heap.dequeue()
        let y = this.heap.dequeue()

        if (x != y) {
            this.heap.enqueue(x - y)
        }
    }

    return this.heap.dequeue() || 0
};