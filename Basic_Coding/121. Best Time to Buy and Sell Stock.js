// var maxProfit = function (prices) {
//   let minValue = prices[0];
//   let minIndex = 0;
//   let maxValue = prices[0];
//   let maxIndex = 0;

//   for (let i = 0; i <= prices.length - 1; i++) {
//     if (prices[i] < minValue) {
//       minValue = prices[i];
//       minIndex = i;
//       maxValue = prices[i];
//     }
//   }
//   for (let i = minIndex; i <= prices.length - 1; i++) {
//     if (prices[i] > maxValue) {
//       maxValue = prices[i];
//       maxIndex = i;
//     }
//   }
//   if (maxIndex > minIndex) {
//     return maxValue - minValue;
//   }

//   return 0;
// };

var maxProfit = function (prices) {
  let minPrice = prices[0]; // Initialize minPrice with the first price
  let maxProfit = 0; // Initialize maxProfit to 0, as we need to maximize profit

  for (let i = 1; i < prices.length; i++) {
    // Calculate profit if we sold at the current price
    let profit = prices[i] - minPrice;

    // Update maxProfit if the current profit is greater
    maxProfit = Math.max(maxProfit, profit);

    // Update minPrice to the lowest value encountered so far
    minPrice = Math.min(minPrice, prices[i]);
  }

  return maxProfit;
};
