let nums = [3, 3, 4, 5, 6, 7, 8, 3, 4, 6];
let val = 3;

function removeElement(nums, val) {
  let x = 0;
  for (let i = 0; i < nums.length; i++) {
    // shift elements to left if it is not equal
    if (nums[i] !== val) {
      nums[x] = nums[i];
      x = x + 1;
    }
  }

  // Use slice to get the remaining part of the array
  let result = nums.slice(0, x);
  console.log(result);
  return result;
}

removeElement(nums, val);
