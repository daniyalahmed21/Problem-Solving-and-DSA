var maxProfit = function (prices) {
  let minValue = prices[0];
  let maxProfit = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i - 1] < minValue) {
      minValue = prices[i - 1];
     
    }
    if(prices[i] - minValue > maxProfit){
      maxProfit = prices[i] - minValue
    }
  }
  return maxProfit;
};

let prices = [7, 1, 5, 3, 6, 4];
console.log(maxProfit([7, 1, 5, 3, 6, 4]));
