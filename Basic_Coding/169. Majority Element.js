var majorityElement = function (nums) {
  const obj = {};
  for (val of nums) {
    obj[val] = obj[val] + 1 || 1;
  }
  const maxKey = Object.keys(obj).reduce((a, b) => (obj[a] >= obj[b] ? a : b));
  return parseInt(maxKey);
};
