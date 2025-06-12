// var rotate = function (nums, k) {
//   let size = nums.length;
//   if (k > size) {
//     k = k % size;
//   }
//   const rotated = nums.splice(size - k, size);
//   nums.unshift(...rotated);
//   return nums;
// };

//O(1) space Complexity:

var rotate = function (nums, k) {
  const size = nums.length;
  if (k > size) {
    k = k % size;
  }
  const reverse = (start, end) => {
    while (start < end) {
      [nums[start], nums[end]] = [nums[end], nums[start]];
      start++;
      end--;
    }
  };
  //reverse the whole array
  reverse(0, size - 1);
  //reverse first k elements;
  reverse(0, k - 1);
  //reverse remaining elelments
  reverse(k, size - 1);
};
