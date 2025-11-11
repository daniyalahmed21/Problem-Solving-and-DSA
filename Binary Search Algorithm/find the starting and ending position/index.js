// var searchRange = function (nums, target) {
//   let right = nums.length - 1;
//   let left = 0;
//   let ans = [-1, -1];
//   while (left < right) {
//     let mid = left + Math.floor((right - left) / 2);

//     if (nums[mid] < target) {
//       left = mid + 1;
//     } else {
//       right = mid;
//     }
//   }

//   nums[right] === target ? (ans[0] = right) : -1;

//   right = nums.length - 1;
//   left = 0;

//   while (left < right) {
//     let mid = left + Math.ceil((right - left) / 2);
//     console.log(left, mid, right);

//     if (nums[mid] > target) {
//       right = mid - 1;
//     } else {
//       left = mid;
//     }

//     if (nums[right] !== target) {
//       right = right - 1;
//     }
//   }

//   nums[left] === target ? (ans[1] = left) : -1;

//   return ans;
// };

var searchRange = function (nums, target) {
  let right = nums.length - 1;
  let left = 0;
  let ans = [-1, -1];
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);

    if (nums[mid] === target) {
      ans[0] = mid;
      right = mid - 1;
    } else if (nums[mid] < target) {
      left = mid + 1
    }else if (nums[mid] > target){
      right = mid - 1
    }
  }

  right = nums.length - 1;
  left = 0;

    while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);

    if (nums[mid] === target) {
      ans[1] = mid;
      left = mid + 1;
    } else if (nums[mid] < target) {
      left = mid + 1
    }else if (nums[mid] > target){
      right = mid - 1
    }
  }

  return ans;
};

let nums = [5, 7, 7, 8, 8, 10];
console.log(searchRange(nums, 8));
