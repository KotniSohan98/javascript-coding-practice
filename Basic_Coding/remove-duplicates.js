//Ques 3 - Remove duplicates from sorted Array.
//Given an Integer array nums sorted in non-descending order, remove
//the duplicates in-place such that each unique element appears
//Only once. The relative order of the elements should be kept
//the same. Then return the number of unique elments in nums.

//Input: [1,1,2]   --->    Output:2,[1,2,_]
//Input: [0,0,1,1,1,2,2,3,3,4]  ---> Output: 5,[0,1,2,3,4,_,_,_,_,_,_]

// function removeDuplicates(nums) {
//   for (let i = 0; i < nums.length - 1; i++) {
//     //O(n)
//     if (nums[i] === nums[i + 1]) {
//       nums.splice(i + 1, 1); // O(1)
//       i--;
//     }
//   }
//   return nums.length;
// }

//Total Time Complexity is O(n)

//Without inbuilt Js Function

function removeDuplicates(nums) {
  if (nums.length === 0) return 0;
  let i = 0;
  for (let j = 0; j < nums.length; j++) {
    if (nums[i] !== nums[j]) {
      i++;
      nums[i] = nums[j];
    }
  }
  return i + 1;
}

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
