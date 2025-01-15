//Write a JavaScript program to convert a string to title case (capitalize the first letter of each word).
const toTileCase = (str) => {
  return str
    .split(" ")
    .map((item) => item[0].toUpperCase() + item.slice(1).toLowerCase())
    .join(" ");
};

console.log(toTileCase("hello my name is sohan"));
