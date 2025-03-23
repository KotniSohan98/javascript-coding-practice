//Write a JavaScript function to check if a given string is a palindrome (reads the same forwards and backwards).
//Write a JavaScript program to reverse a given string.
// const isPallindrome = (str) => {
//   let arr = [];
//   const strArr = [...str];
//   for (let i = strArr.length - 1; i >= 0; i--) {
//     arr.push(strArr[i]);
//   }
//   if (str === arr.join("")) return true;
//   return false;
// };

//Simple Way
const isPallindrome = (str) => {
  return str === str.split("").reverse().join("");
};

console.log(isPallindrome("nitin"));
