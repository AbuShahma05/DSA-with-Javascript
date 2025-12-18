// Missing Number

let nums = [9, 6, 4, 2, 3, 5, 7, 0, 1];

var findMissNum = function (nums) {
  let sum = 0;
  let n = nums.length;

  for (let i = 0; i < n; i++) {
    sum = sum + nums[i];
  }
  let total = n * (n + 1)/ 2;
  return total - sum;
};

console.log(findMissNum(nums));
