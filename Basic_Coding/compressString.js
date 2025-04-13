//It returns as per the object
// function compressString(str) {
//   let resultObj = {};
//   for (let char of str) {
//     resultObj[char] = (resultObj[char] || 0) + 1;
//   }
//   let result = "";
//   for (let key in resultObj) {
//     result += key + resultObj[key];
//   }
//   return result;
// }

// let input = ["aaabbb", "bbaa"];
// let output = input.map(compressString);
// console.log(output); // [ 'a3b3', 'b2a2' ]

//It return ascending order
function compressString(str) {
  let resultObj = {};
  for (let char of str) {
    resultObj[char] = (resultObj[char] || 0) + 1;
  }
  return Object.keys(resultObj)
    .sort()
    .map((key) => key + resultObj[key])
    .join("");
}

let input = ["aaabbb", "bbaa"];
let output = input.map(compressString);
console.log(output); // [ 'a3b3', 'a2b2' ]
