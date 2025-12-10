/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
    let heap = MaxPriorityQueue.fromArray(stones);

    while (heap.size() > 1) {

        let x = heap.dequeue()
        let y = heap.dequeue()

        if (x != y) {
            heap.enqueue(x - y)
        }
    }

    return heap.dequeue() || 0
};