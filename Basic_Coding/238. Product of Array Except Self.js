//Buete force Method - o(n^2)- Time Complexity
// var productExceptSelf = function (nums) {
//     let arr = [];
//     let result = 1;
//     for (let i = 0; i < nums.length; i++) {
//         result = 1;
//         for (let j = 0; j < nums.length; j++) {
//             if (i === j) {
//                 continue;
//             } else {
//                 result = result * nums[j]
//             }
//         }
//         arr.push(result);

//     }
//     return arr;
// };

var productExceptSelf = function (nums) {
  let n = nums.length;
  let left = Array(n).fill(1);
  let right = Array(n).fill(1);
  let answer = Array(n);

  for (let i = 1; i < n; i++) {
    left[i] = left[i - 1] * nums[i - 1];
  }

  for (let i = n - 2; i >= 0; i--) {
    right[i] = right[i + 1] * nums[i + 1];
  }

  for (let i = 0; i < n; i++) {
    answer[i] = left[i] * right[i];
  }

  return answer;
};
