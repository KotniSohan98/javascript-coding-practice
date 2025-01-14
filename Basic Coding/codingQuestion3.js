// Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers.

// const filterEvenNumbers = (arr) => {
//   let newArr = [];
//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] % 2 == 0) newArr.push(arr[i]);
//   }
//   return newArr;
// };

//simple way
const filterEvenNumbers = (arr) => {
  return arr.filter((item) => item % 2 == 0);
};

console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
