//Write a JavaScript program to find the maximum number in an array.

// const findMaxNumber = (arr) => {
//   let res = arr[0];
//   arr.forEach((item) => {
//     if (item > res) res = item;
//   });
//   return res;
// };

//simple way
const findMaxNumber = (arr) => {
  return Math.max(...arr);
};

console.log(findMaxNumber([9, 6, 10, 5, 4, 3]));
