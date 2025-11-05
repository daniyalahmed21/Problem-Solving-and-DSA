var isAnagram = function (s, t) {
  let charCount = {};

  if(s.length !== t.length) return false

  for (let char of s) {
    if (!charCount[char]) {
      charCount[char] = 1;
    } else {
      charCount[char] = charCount[char] + 1;
    }
  }


  for (let char of t) {
    if (!charCount[char]) {
      return false
    } else {
      charCount[char] -= 1;
    }
  }
  
  let values = Object.values(charCount)
  for (const value of values) {
    if(value >= 0){
        return false
    }
  }

  return true;
};

// var isAnagram = function (s, t) {
//     return s.split("").sort().join() === t.split("").sort().join()
// }

let s = "ab",
  t = "a";

console.log(isAnagram(s, t));
