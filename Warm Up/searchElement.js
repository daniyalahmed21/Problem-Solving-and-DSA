// Write a function that searches for an element in an array and returns the index, if the element is not present then just return -1

function searchElement(arr, element) {
  for (let index = 0; index < arr.length; index++) {
    if (element === arr[index]) {
      return index;
    }
  }
  return -1;
}

console.log(searchElement([1, 2, 3], 3))
