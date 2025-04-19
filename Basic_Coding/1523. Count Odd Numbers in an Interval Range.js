var countOdds = function (low, high) {
  let count = Math.floor((high - 0 + 1) / 2) - Math.floor(low / 2);

  return count;
};
