//Array Decleration
let arr = new Array();
let arr1 = [];
console.log(typeof arr);
console.log(typeof arr1);

//Arrays- Add and Remove Elements

let arrFruit = ["apple", "Banana", "Mango", "Cherry"];
// Add end of the array
arrFruit.push("orrange");
console.log(arrFruit);

let arrFruit1 = ["apple", "Banana", "Mango", "Cherry"];
// Remove end of the array
arrFruit1.pop();
const fruit = arrFruit1.pop();
console.log(arrFruit1);
console.log(fruit);

//Add element to top of the array
const arrFruit2 = ["apple", "Banana", "Mango", "Cherry"];
arrFruit2.unshift("orange");
console.log(arrFruit2);

//Remove element from top of the array
arrFruit2.shift();
console.log(arrFruit2);

//loops
let array = [1, 2, 3, 4, 5];
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

let i = 0;
while (i < array.length) {
  console.log(array[i]);
  i++;
}

//Inbuilt Loop Methods

const numbers = [1, 2, 3, 4, 5];

//map in JavaScript
numbers.map((item, index, arr) => {
  return item + 5;
});

//filter in Javascript
numbers.filter((item, index, arr) => {
  return item > 3;
});

//reduce in Javascript
numbers.reduce((prev, item, index, arr) => {
  return prev + item;
}, 0);

//some in JavaScript
numbers.some((item, index, arr) => {
  return item > 3;
}, 0);

//every in JavaScript
numbers.every((item, index, arr) => {
  return item > 3;
}, 0);

//find in JavaScript - It returns particular elements if it is find else it will return undefined
const newNums = numbers.find((item, index, arr) => {
  return item > 3;
}, 0);
console.log(newNums);

//findIndex - Returns the index of the first element in the array where predicate is true , and -1 otherwise
const dummy1 = [1, 2, 3, 4, 4];
const index = dummy1.findIndex((item) => item === 2);
console.log(index);

//Spread and Rest Operators
const nums1 = [1, 2, 3];
const nums2 = [4, 5, 6, 7];

//spread operator
const findNums = [...nums1, ...nums2];

console.log(findNums);

//Rest operator
function sum(...numbers) {
  return numbers;
}

console.log(sum(1, 2, 3));

//More Array methods

//concat- it returns new array without modifying existing array

nums1.concat(nums2);

//slice
// const newArr = arrFruit.slice(0, 2);
arrFruit.slice(-2);

//slice- This going to remove elements and and replace with new elements - 1st param- index, 2nd param-total number of elements and 3rd param - replacemnet element and it mutates to origina array
const arrFruit3 = ["apple", "Banana", "Mango", "Cherry"];
arrFruit3.splice(1, 2, "BlueBerry");
console.log(arrFruit3);

//fill - This is going to replace all elements in the array - 1st param - replacement element, 2nd param- start index
const dummy = [1, 2, 3, 4, 5];
dummy.fill(0, 2);
console.log(dummy);

//flat- we can give param as how many levels of depth we can flat the array
const flatEx = [1, [2, 3], [[4, 5], 6]]; // [1,2,3,4,5,6]
const flattenedArray = flatEx.flat(2);
console.log(flattenedArray);

//reverse - it will update the original array
nums1.reverse();
console.log(nums1);

//sort - It gointo sort the original array
const unsorted = [5, 2, 10, 7, 3, 1];
//Asscending
unsorted.sort((a, b) => a - b);
//Descending
// unsorted.sort((a, b) => b - a);
console.log(unsorted);
