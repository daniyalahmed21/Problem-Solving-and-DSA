var reverseStr = function (s, k) {
  let arr = s.split("");
  let n = arr.length;

  for (let i = 0; i < n; i = i + 2 * k) {
    let left = i;
    let right = Math.min(i + k - 1, n - 1);
    while(left < right){
        [arr[left],arr[right]] = [arr[right],arr[left]]
        left++
        right--
    }
  }

  return arr.join("");
};

let s = "abcdefg",
  k = 2;

console.log(reverseStr(s, k));
