// var groupAnagrams = function(strs) {
//     let map = {}
//     for (let i = 0; i < strs.length; i++) {
//         let word = strs[i];
//         let sortedWord = word.split('').sort().join('');

//         if (map[sortedWord]) {
//             map[sortedWord].push(word);
//         } else {
//             map[sortedWord] = [word];
//         }
//     }
//     return Object.values(map);
// };

// var groupAnagrams = function (strs) {
//   let map = {};

//   for (let i = 0; i < strs.length; i++) {
//     let freqArr = Array(26).fill(0);
//     let s = strs[i];
//     for (let j = 0; j < s.length; j++) {
//       let index = s[j].charCodeAt() - "a".charCodeAt();
//       ++freqArr[index];
//     }
    
//     let key = freqArr.join('#'); 
    
//     if (!map[key]) {
//       map[key] = [s];
//     } else {
//       map[key].push(s);
//     }
//   }

//   return Object.values(map)
// };

// let strs = ["eat", "tea", "tan", "ate", "nat", "bat"];

// console.log(groupAnagrams(strs));
