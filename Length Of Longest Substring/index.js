var lengthOfLongestSubstring = function (s) {
  let max = 0;
  let map = new Map();
  let i = 0;
  let j = 0;
  while (j < s.length) {
    if (map.has(s[j]) && map.get(s[j]) >= i) {
      i = map.get(s[j]) + 1;
    }
    map.set(s[j], j);
    if (j - i + 1 > max) {
      max = j - i + 1;
    }
    j++;
  }
  return max;
};

let s = "aabaab!bb";
console.log(lengthOfLongestSubstring(s));
