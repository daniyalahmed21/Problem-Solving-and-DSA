var guessNumber = function (n) {
    let left = 1;
    let right = n;

    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);
        let res = guess(mid) // assume guess API is defined elsewhere
        if (res === 0) {
            return mid;
        } else if (res === 1) {
            left = mid + 1;

        } else if (res === -1) {
            right = mid - 1;

        }
    }
};