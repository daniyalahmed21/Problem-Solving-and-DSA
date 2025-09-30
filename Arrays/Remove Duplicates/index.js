var removeDuplicates = function (nums) {
  const newArray = [];
  let duplicates = 0;
  for (let index = 0; index < nums.length; index++) {
    if (!newArray.includes(nums[index])) {
      newArray.push(nums[index]);
    }
    if (nums[index + 1] === nums[index + 2]) {
      duplicates++;
    }
  }

  for (let index = 0; index < duplicates; index++) {
    newArray.push("_")
    
  }
  return newArray
};

console.log(removeDuplicates([1,1,2]));
