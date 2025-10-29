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
var lengthOfLastWord = function (s) {
  let n = s.length - 1
  let count = 0
  while (n>=0){
    if(s[n] != " "){
        ++count
    }else if(count>0){
        break
    }
    --n;
  }
  return count
};

console.log(lengthOfLastWord("   fly me   to   the moon  "));


// var lengthOfLastWord = function (s) {
//   let words = s.trim().split(" ");
//   return words[words.length - 1].length;
// };
