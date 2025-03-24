//Ques 2 - Rotate array by K
//Given an intiger array nums, rotate the array to the right by k steps,
//where k is non-negative.

//Input: nums = [1,2,3,4,5,6,7],k=3  --->> Output:[5,6,7,1,2,3,4]
//Input: nums = [-1,-100,3,99], k=2   ----->>Output: [3,99,-1,-100]

//My Apprroach Brueteforce Method
// function rotateArraybyK(arr, k) {
//   for (let i = 0; i < k; i++) {
//     const num = arr.pop();

//     arr.unshift(num);
//   }
//   return arr;
// }

/**pop()  - O(1)
 * unshift - O(n)
 * For each rotation till k o(k) *O(n) = O(k*n)
 */

// function rotateArraybyK(arr, k) {
//   let size = arr.length;
//   if (k > size) {
//     k = k % size;
//   }
//   const rotated = arr.splice(size - k, size);
//   arr.unshift(...rotated);
//   return arr;
// }
/*splice - O(n)
total - O(n)
*/

//Without Inbuit function
//[1,2,3,4,5,6,7]-->[7,6,5,4,3,2,1](Reversing the whole array)-->[5,6,7,4,3,2,1](if k=3 then first three elements we are reversing)--->[5,6,7,1,2,3,4](reversing the rest of the elements)
function rotateArraybyK(arr, k) {
  let size = arr.length;
  if (k > size) {
    k = k % size;
  }
  reverse(arr, 0, arr.length - 1); //O(n)
  reverse(arr, 0, k - 1); //O(k)
  reverse(arr, k, arr.length - 1); //O(n-k)
  return arr;
}

function reverse(arr, left, right) {
  while (left < right) {
    const temp = arr[left];
    arr[left++] = arr[right];
    arr[right--] = temp;
  }
}

///Total Time complexity is O(n)

const result = rotateArraybyK([1, 2, 3, 4, 5, 6, 7], 3);
// const result = rotateArraybyK([-1, -100, 3, 99], 2);
console.log(result);
