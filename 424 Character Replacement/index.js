/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  let map = new Map();
  let i = 0;
  let j = 0;
  let maxFreq = 0;
  let maxLen = 0;

  while (j < s.length) {
    map.set(s[j],( map.get(s[j] )|| 0) + 1);

    maxFreq = Math.max(maxFreq, map.get(s[j]));

    while (j - i + 1 - maxFreq > k) {
      map.set(s[i], map.get(s[i]) - 1);
      i++;
    }

    maxLen = Math.max(maxLen,j - i + 1)

    j++;
  }

  return maxLen;
};

let s = "ABAB",
  k = 2;
console.log(characterReplacement(s, k));
