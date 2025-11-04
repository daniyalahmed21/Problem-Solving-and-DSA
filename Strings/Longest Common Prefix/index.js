var longestCommonPrefix = function (strs) {
  let prefix = strs[0];

  for (let i = 0; i < strs.length; i++) {
    while (!strs[i].startsWith(prefix)) {
      prefix =  prefix.slice(0, prefix.length - 1);
    }
  }

  return prefix;
};

let strs =["ab", "a"]

console.log(longestCommonPrefix(strs));
