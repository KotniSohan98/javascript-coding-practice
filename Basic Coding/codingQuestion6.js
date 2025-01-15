//8. Write a JavaScript program to find the largest element in a nested array.
const findLargestElement = (nestedArray) => {
  let largest = nestedArray[0][0];
  for (arr of nestedArray) {
    for (num of arr) {
      if (num > largest) largest = num;
    }
  }
  return largest;
};

console.log(
  findLargestElement([
    [0, 2, 4, 6, 7],
    [2, 6, 8, 1],
    [1, 7, 9, 0],
  ])
);
