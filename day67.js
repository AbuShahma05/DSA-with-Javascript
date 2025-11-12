let prices = [7, 4, 1, 5, 8, 9];

function maximumProfit(prices) {
  let min = prices[0];
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] - min > maxProfit) {
      maxProfit = prices[i] - min;
    }
    if (prices[i] < min) {
      min = prices[i];
    }
  }
  console.log(`Maximum profit is this : ${maxProfit}`);
}

console.log(maximumProfit(prices));
