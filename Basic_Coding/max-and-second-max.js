//Ques - Second Largest Number
//Given an array Arr of size N, print second largest
//distinct element from an array.

//Input: [12,35,1,10,34,1] --->> Output: 34
//Input:[10,5,10]    ---->> Output: 5

//Bruteforce approach
// function secondLargstNumber(arr) {
//   arr.sort((a, b) => {
//     return a - b;
//   });

//   let max = arr[arr.length - 1];

//   for (let i = arr.length - 2; i >= 0; i--) {
//     if (arr[i] < max) {
//       return arr[i];
//     }
//   }
// }

// A Set is an ordered collection of unique values.is a built-in data structure that allows you to store unique values of any type (primitives or objects).

// It provides methods like .add(), .delete(), .has(), and .clear() for managing the data.

// It's useful for ensuring uniqueness and can handle any data type.

//Array.from(mySet) or [...mySet] are the most concise and common ways to convert a Set to an Array.

// function secondLargstNumber(arr) {
//   const uniqueArr = Array.from(new Set(arr)); // To create unique elements and set returns a values in curly braces
//   uniqueArr.sort((a, b) => b - a);
//   console.log(uniqueArr);
//   if (uniqueArr.length >= 2) {
//     return uniqueArr[1];
//   } else {
//     return -1;
//   }
// }

/**  This above method uses convert array to set is o(n) and and again convert to set of unique values to array is o(n)
 * .sort()  - o(nlogn)
 * Accessing an element by index is o(1)
 * total - o(n)+o(n)+o(nlog n)+o(1) = o(nlog n)
 */

function secondLargestOptimised(arr) {
  let largest = Number.NEGATIVE_INFINITY;
  let secondLargest = Number.NEGATIVE_INFINITY;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] != largest && arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
}

// This above time complexity is O(n)

// const result = secondLargestOptimised([12, 35, 1, 10, 34, 1]);
// const result = secondLargestOptimised([10, 5, 10]);
// const result = secondLargestOptimised([10, 10]); // This is not working
// const result = secondLargstNumber([12, 35, 1, 10, 34, 1]);
// const result = secondLargstNumber([10, 5, 10]);
console.log(result);
