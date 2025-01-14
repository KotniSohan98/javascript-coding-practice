// Write a JavaScript program to calculate the factorial of a given number.

// const factorial = (num) => {
//   let res = 1;
//   for (let i = 1; i <= num; i++) res *= i;
//   return res;
// };

//Recursive method
const factorial = (num) => {
  if (num === 0 || num === 1) return 1;
  return num * factorial(num - 1);
};

console.log(factorial(5));
