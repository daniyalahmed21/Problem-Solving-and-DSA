/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  let m = needle.length;
  let n = haystack.length
  let lps = Array(m).fill(0);
  let i = 0;
  let j = 1;
  while (j < m) {
    if (needle[i] === needle[j]) {
      lps[j] = i + 1;
      i++;
      j++;
    } else {
      if (i === 0) {
        lps[j] = 0;
      } else {
        i = lps[i - 1];
      }
    }
  }
  (j = 0), (i = 0);
  while (i < n) {
    if (haystack[i] === needle[j]) {
      i++;
      j++;
    } else {
      if (j === 0) {
        i++;
      } else {
        j = lps[j - 1];
        i++;
      }
    }
    if (j === m) {
      return i - m;
    }
  }
  return -1;
};

let haystack = "mississippi",
  needle = "onions";
console.log(strStr(haystack, needle));
