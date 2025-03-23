//Bubble Sort using Traditional method

// const bubbleSort = (arr) => {
//   const sortedArray = [...arr];
//   for (let i = 0; i < sortedArray.length - 1; i++) {
//     for (let j = 0; j < sortedArray.length - 1; j++) {
//       if (sortedArray[j] > sortedArray[j + 1]) {
//         let temp = sortedArray[j];
//         sortedArray[j] = sortedArray[j + 1];
//         sortedArray[j + 1] = temp;
//         console.log("Every loop", sortedArray);
//       }
//     }
//   }
//   console.log("arr", arr);
//   console.log("sortedArray", sortedArray);

//   return sortedArray;
// };

//To decrease the redundant comparisions between sorted array we change the inner for loop condtion
const bubbleSort = (arr) => {
  const sortedArray = [...arr];
  for (let i = 0; i < sortedArray.length - 1; i++) {
    for (let j = 0; j < sortedArray.length - i - 1; j++) {
      if (sortedArray[j] > sortedArray[j + 1]) {
        // let temp = sortedArray[j];
        // sortedArray[j] = sortedArray[j + 1];
        // sortedArray[j + 1] = temp;
        //Swaping two values without using third variable;
        sortedArray[j] = sortedArray[j] + sortedArray[j + 1];
        sortedArray[j + 1] = sortedArray[j] - sortedArray[j + 1];
        sortedArray[j] = sortedArray[j] - sortedArray[j + 1];

        console.log("Every loop", sortedArray);
      }
    }
  }
  console.log("arr", arr);
  console.log("sortedArray", sortedArray);

  return sortedArray;
};

const arr = [4, 9, 3, 10, 5, 2, 1];
console.log(bubbleSort(arr));
