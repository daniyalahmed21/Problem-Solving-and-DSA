let arr = [10, 8, 7, 12, 45, 6, 55, 34, 18];

function HeapSort(arr) {
  let n = arr.length;

  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    HeapifyDown(arr, i, n);
  }

  console.log(arr);

  for (let i = n - 1; i > 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];
    HeapifyDown(arr, 0, i);
  }

  return arr
}

function HeapifyDown(arr, i, n) {
  let largest = i;

  let left = 2 * i + 1;
  let right = 2 * i + 2;

  if (left < n && arr[largest] < arr[left]) {
    largest = left;
  }

  if (right < n && arr[largest] < arr[right]) {
    largest = right;
  }

  if (i !== largest) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    HeapifyDown(arr, largest, n);
  }
}

console.log(HeapSort(arr));