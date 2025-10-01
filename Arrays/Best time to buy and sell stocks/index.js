var maxProfit = function (prices) {
  let minProfit = prices[0];
  let maxProfit = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] - minProfit > maxProfit) {
      minProfit = maxProfit;
      maxProfit = prices[i] - minProfit;
    }
  }
  return maxProfit;
};

let prices = [7, 1, 5, 3, 6, 4];
console.log(maxProfit([7, 1, 5, 3, 6, 4]));
