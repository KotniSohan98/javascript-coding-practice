//Write a JavaScript function that returns the Fibonacci sequence up to a given number of terms.

const fibonacciSeries = (num) => {
  const newArr = [0, 1];
  if (num <= 0) return [];
  if (num === 1) return [0];

  for (let i = 2; i < num; i++) {
    newArr.push(newArr[i - 1] + newArr[i - 2]);
  }
  //using while
  // while(newArr.length<num){
  //     newArr.push(newArr[i - 1] + newArr[i - 2]);
  // }

  return newArr;
};

console.log(fibonacciSeries(10));
