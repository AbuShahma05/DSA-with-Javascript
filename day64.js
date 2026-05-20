/* 
Remove Duplicates from Sorted Array
*/

function removeDuplicate(nums) {
  if (nums.length === 0) return [];

  let x = 0;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[x]) {
      x++;
      nums[x] = nums[i];
    }
  }

  return nums.slice(0, x + 1);
}

let nums = [0, 0, 1, 1, 2, 2, 3, 3];

console.log(removeDuplicate(nums));
