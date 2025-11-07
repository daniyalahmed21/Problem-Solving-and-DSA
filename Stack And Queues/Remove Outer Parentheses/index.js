/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (s) {
  let stack = [];
  let newString = "";
  let n;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push(s[i]);
      n = stack.length;

      if (n > 1) {
        newString += s[i];
      }
    } else {
      n = stack.length;

      if (n > 1) {
        newString += s[i];
      }
      stack.pop();
    }
  }
  return newString;
};

let s = "(()())(())(()(()))";

console.log(removeOuterParentheses(s));
