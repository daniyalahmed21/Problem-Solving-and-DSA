function SelectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minimum = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] <= arr[minimum]) {
        minimum = j;
      }
    }
    if (minimum !== i) {
      let temp = arr[i];
      arr[i] = arr[minimum];
      arr[minimum] = temp;
    }
  }
}

let arr = [64, 25, 12, 22, 11];
SelectionSort(arr);
console.log("Sorted array:", arr);
