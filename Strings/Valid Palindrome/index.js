var isPalindrome = function(s) {
    let str = s.toLowerCase().trim().replace(/[^a-zA-Z0-9]/g, "");
    let n = str.length
    console.log(str,n)
    for (let i = 0; i < n/2; i++) {
        if(str[i] !== str[n-i-1]){
            return false
        }
    }
    return true
};

// let s = "A man, a plan, a canal: Panama"
let s = "0P"

console.log(isPalindrome(s))