/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  let j = 0;
  while (j < haystack.length) {
    if (needle[0] === haystack[j]) {
      let match = haystack.slice(j, j + needle.length);
      if (match === needle) {
        return j;
      } else {
        j++;
      }
    } else {
      j++;
    }
  }
  return -1;
};

let haystack = "mississippi",
  needle = "issip";
console.log(strStr(haystack, needle));
