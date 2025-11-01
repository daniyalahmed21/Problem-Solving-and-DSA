var maxFreqSum = function (s) {
  const map = new Map();

  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      map.set(s[i], map.get(s[i]) + 1);
    } else {
      map.set(s[i], 1);
    }
  }

  let maxVowels = 0;
  let maxConsonants = 0;
  let vowels = ["a", "e", "i", "o", "u"];

  for (let [key, value] of map.entries()) {
    if (vowels.includes(key)) {
      if (value > maxVowels) {
        maxVowels = value;
      }
    } else {
      if (value > maxConsonants) {
        maxConsonants = value;
      }
    }
  }

  return maxVowels + maxConsonants
};

let s = "successes"

console.log(maxFreqSum(s))