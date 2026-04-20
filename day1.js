// Find the Maximum and Minimum Element in an Array

let arr = [3, 1, 4, 1, 5, 9];
let min = +Infinity;
let max = -Infinity;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] < min) {
    min = arr[i];
  } else if (arr[i] > max) {
    max = arr[i];
  }
}

console.log("Minimum:", min);
console.log("Maximum:", max);

/* 
Reverse an Array In-Place

used two pointer technique in this 
*/
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

// Check if the Array is Sorted in ascending order

function isArraySorted(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false; // stop immediately if wrong
    }
  }
  return true; // only runs if everything is fine
}

let input1 = [1, 2, 3, 4];

let result = isArraySorted(input1);

if (result) {
  console.log("The array is sorted.");
} else {
  console.log("The array is NOT sorted.");
}

// Check if the array is sorted in descending order 

function isArraySortedDescending(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < arr[i + 1]) {
      return false; // violation of descending order
    }
  }
  return true;
}

let input1 = [9, 7, 5, 3];

if (isArraySortedDescending(input1)) {
  console.log("The array is sorted in descending order.");
} else {
  console.log("The array is NOT sorted in descending order.");
}

// Remove Duplicates

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
