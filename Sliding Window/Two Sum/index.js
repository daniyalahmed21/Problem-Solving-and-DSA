/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (arr, target) {
    let map = {}
    for (let i = 0; i < arr.length; i++) {
        map[arr[i]] = i        
    }
    console.log(map);
    for (let i = 0; i < arr.length; i++) {
        let pairToFind = target - arr[i]
        if(map[pairToFind] && map[pairToFind]!== i) {
            return [i,map[pairToFind]]
        }    
    }
};

let nums = [3,2,3], target = 6
console.log(twoSum(nums, target));
