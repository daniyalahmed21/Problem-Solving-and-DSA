// /**
//  * @param {string} s
//  * @return {string}
//  */
// var removeOuterParentheses = function (s) {
//   let stack = [];
//   let newString = "";
//   let n;
//   for (let i = 0; i < s.length; i++) {
//     if (s[i] === "(") {
//       stack.push(s[i]);
//       n = stack.length;

//       if (n > 1) {
//         newString += s[i];
//       }
//     } else {
//       n = stack.length;

//       if (n > 1) {
//         newString += s[i];
//       }
//       stack.pop();
//     }
//   }
//   return newString;
// };

var removeOuterParentheses = function (s) {
  let newString = "";
  let level = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      level++;
      if (level > 1) {
        newString += s[i];
      }
    } else {
        if (level > 1) {
        newString += s[i];
      }
      level--;
      
    }
  }
  return newString;
};

let s = "(()())(())(()(()))";

console.log(removeOuterParentheses(s));
