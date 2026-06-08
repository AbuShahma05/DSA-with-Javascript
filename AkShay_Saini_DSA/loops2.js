/* 
write a function that searches for an element in an array and returns the index, 
if the element is not present then just return -1
*/

let arr = [4, 2, 0, 10, 8, 30];
let findNum = 10;

function searchElement(arr, findNum) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === findNum) {
      return i; // return the index
    }
  }

  return -1; // only return -1 after checking all elements
}

console.log(searchElement(arr, findNum)); // 3

/* 
write a function that returns the number of negative number in an array
*/

let arr1 = [2, -9, 17, 0, -1, -10, 8, -4];
let count = 0;

function countNegNum(arr1) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] < 0) {
      count++;
    }
  }
  return count;
}

console.log(countNegNum(arr1));

/* 
write a function that returns the largest number in an array
*/

let arr2 = [5, 0, 9, 17, 10, 1];
let largest = -Infinity;

function largestNum(arr2) {
  for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] > largest) {
      largest = arr2[i];
    }
  }
  return largest;
}

console.log(largestNum(arr2));
