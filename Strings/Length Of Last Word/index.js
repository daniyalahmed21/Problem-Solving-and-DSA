// var lengthOfLastWord = function (s) {
//   let trimmedString = s.trim();
//   let length = trimmedString.length;
//   let lastStringLength = 0;

//   for (let i = 0; i < length; i++) {
//     if (trimmedString[i] !== " ") {
//       lastStringLength++;
//     } else {
//       lastStringLength = 0;
//     }
//   }

//   return lastStringLength;
// };

console.log(lengthOfLastWord("   fly me   to   the moon  "));


var lengthOfLastWord = function (s) {
  let words = s.trim().split(" ");
  return words[words.length - 1].length;
};
