var groupAnagrams = function(strs) {
    let map = {}
    for (let i = 0; i < strs.length; i++) {
        let word = strs[i];
        let sortedWord = word.split('').sort().join('');

        if (map[sortedWord]) {
            map[sortedWord].push(word);
        } else {
            map[sortedWord] = [word];
        }
    }
    return Object.values(map);
};

let strs = ["eat","tea","tan","ate","nat","bat"]

console.log(groupAnagrams(strs))