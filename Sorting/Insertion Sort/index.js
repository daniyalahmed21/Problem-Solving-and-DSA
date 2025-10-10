function InsertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let curr = arr[i];
    let prev = i - 1;

    while (prev >= 0 && arr[prev] > curr) {
      arr[prev + 1] = arr[prev];
      prev--;
    }

    arr[prev + 1] = curr;
    console.log("Pass", i, ":", arr);
  }
}

let arr = [3, 4, 5, 7, 1, 2];
InsertionSort(arr);
console.log("Sorted array:", arr);
