/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (matrix, k) {
  let heap = new MinPriorityQueue((x) => x.val);
  let count = 0;
  for (let i = 0; i < matrix.length; i++) {
    heap.push({ val: matrix[i][0], coordinates: [i, 0] });
  }

  while (count < k) {
    let elem = heap.pop();
    count++;
    if (count === k) {
      return elem.val;
    }

    let [x, y] = elem.coordinates;

    if (y + 1 < matrix[x].length) {
      heap.push({ val: matrix[x][y + 1], coordinates: [x, y + 1] });
    }
  }
};
