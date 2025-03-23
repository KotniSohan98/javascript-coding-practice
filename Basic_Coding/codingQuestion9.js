// Write a function that takes an array of objects and a key, and returns a new array sorted based on the values of that key in ascending order.

const sortByKey = (arr, key) => {
  console.log("Array before sort", arr);

  return arr.sort((a, b) => a[key] - b[key]);
};

const arr = [
  { name: "John", age: 30 },
  { name: "Alice", age: 25 },
  { name: "Bob", age: 35 },
  { name: "Alice", age: 28 },
];
console.log(sortByKey(arr, "age"));
