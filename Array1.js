// Find the Maximum and Minimum Element in an Array

let arr = [3, 1, 4, 1, 5, 9];
let min = arr[0];
let max = arr[0];

for (let i = 1; i < arr.length; i++) {
  if (arr[i] < min) {
    min = arr[i];
  } else if (arr[i] > max) {
    max = arr[i];
  }
}

console.log("Minimum:", min);
console.log("Maximum:", max);

// Reverse an Array In-Place

let input = [1, 2, 3, 4];
let start = 0;
let end = input.length - 1;

while (start < end) {
  // Swap using a temp variable
  let temp = input[start];
  input[start] = input[end];
  input[end] = temp;

  // Move pointers
  start++;
  end--;
}
console.log(input);

// Check if the Array is Sorted

let input1 = [1, 2, 3, 4];
let isSorted = true;

for (let i = 0; i < input1.length - 1; i++) {
  if (input1[i] > input1[i + 1]) {
    isSorted = false;
    break;
  }
}

if (isSorted) {
  console.log("The array is sorted.");
} else {
  console.log("The array is NOT sorted.");
}

let nums = [1, 1, 2];

let removeDup = (nums) => {
  if (nums.length === 0) return 0;

  let i = 0;

  for (let j = 1; j < nums.length; j++) {
    if (nums[j] !== nums[i]) {
      i++;
      nums[i] = nums[j];
    }
  }
  return i + 1;
};

let k = removeDup(nums);
console.log("k =", k);
console.log("nums =", nums);
