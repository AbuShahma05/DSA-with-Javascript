/* 
Find the highest/lowest frequency element


24

Problem Statement: Problem Statement: Given an array of size N. Find the highest and lowest frequency element.

Examples
Example 1:
Input: array[] = {10,5,10,15,10,5};
Output: 10 15
Explanation: The frequency of 10 is 3, i.e. the highest and the frequency of 15 is 1 i.e. the lowest.


Example 2:
Input: array[] = {2,2,3,4,4,2};
Output: 2 3
Explanation: The frequency of 2 is 3, i.e. the highest and the frequency of 3 is 1 i.e. the lowest.
*/

function findFrequencyElements(arr) {
  // Step 1: Create an object to store frequency
  let freq = {};

  // Step 2: Count frequency of each element
  for (let num of arr) {
    if (freq[num]) {
      freq[num]++; // increase count if already exists
    } else {
      freq[num] = 1; // initialize count
    }
  }

  // Step 3: Initialize variables
  let maxFreq = 0;
  let minFreq = Infinity;
  let maxElement, minElement;

  // Step 4: Traverse frequency object
  for (let key in freq) {
    let count = freq[key];

    // Check for highest frequency
    if (count > maxFreq) {
      maxFreq = count;
      maxElement = key;
    }

    // Check for lowest frequency
    if (count < minFreq) {
      minFreq = count;
      minElement = key;
    }
  }

  // Step 5: Return result
  return [Number(maxElement), Number(minElement)];
}

// Example usage:
let arr1 = [10, 5, 10, 15, 10, 5];
console.log(findFrequencyElements(arr1)); // Output: [10, 15]

let arr2 = [2, 2, 3, 4, 4, 2];
console.log(findFrequencyElements(arr2)); // Output: [2, 3]
