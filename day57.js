/* 
write a function that returns the number of negative number in an array
*/

let arr = [2, -9, 17, 0, 1, -10, -4, 8];

let count = 0;

function returnNegativeElementSum(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      count++;
    }
  }

  console.log("Number of negative number is:", count);
}

returnNegativeElementSum(arr);

let arr2 = [5, 0, 10, 8, 17, 0];
let largest = arr2[0];
let store = 0;

function largestElement(arr2) {
  for (let i = 0; i < arr2.length; i++) {
    if (largest < arr2[i]) {
      largest = arr2[i];
    }
  }

  console.log("largest element is:", largest);
}

largestElement(arr2);

/* 
+infinity ??
-infinity ??
try to find smallest number in an array 
*/

let arr3 = [2, 5, 8, 9, 1];
let smallestNum = +Infinity;

function findSmallestSum(arr3) {
  for (let i = 0; i < arr3.length; i++) {
    if (smallestNum > arr3[i]) {
      smallestNum = arr3[i];
    }
  }
  console.log('smallest num is:', smallestNum);
  
}

findSmallestSum(arr3)