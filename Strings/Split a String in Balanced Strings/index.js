var balancedStringSplit = function (s) {
  let subStrings = [];
  let subString = "";
  let numOfR = 0;
  let numOfL = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "R") {
      numOfR++;
      subString += "R";
    } else {
      numOfL++;
      subString += "L";
    }

    if (numOfL === numOfR) {
      subStrings.push(subString);
      numOfL = 0;
      numOfR = 0;
      subString=""
    }
  }

  return subStrings.length
};

let s = "RLRRLLRLRL";

console.log(balancedStringSplit(s));
