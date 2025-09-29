// Write a function that searches for an element in an array and returns the index, if the element is not present then just return -1

function searchElement(arr, element) {
  for (let index = 0; index < arr.length; index++) {
    if (element === arr[index]) {
      return index;
    }
  }
  return -1;
}

console.log(searchElement([1, 2, 3], 3));

// Write a function that returns the number of negative numbers in an array

function countNegativeElement(arr) {
  let count = 0;
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] < 0) {
      count += 1;
    }
  }
  return count;
}

console.log(countNegativeElement([1, -2, 3, -4]));

// Write a function that returns largest number in an array

function findLargestNumber(arr) {
  let largestNumber = 0;
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] > largestNumber) {
      largestNumber = arr[index]
    }
  }
  return largestNumber;
}

console.log(findLargestNumber([1, -2, 3, -4]));