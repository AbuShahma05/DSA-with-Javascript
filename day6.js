// Remove duplicates from sorted Array
const sortedArray = [1, 1, 2, 2, 3, 4, 4, 5];
const uniqueArray = [];
let k = 0;

for (let i = 0; i < sortedArray.length; i++) {
  if (sortedArray[i] !== sortedArray[i + 1]) {
    uniqueArray[k] = sortedArray[i];  
    k++;
  }
}

console.log("Original:", sortedArray);  
console.log("Unique:", uniqueArray);    


// Array right rotation by k steps

const arr = [1, 2, 3, 4, 5];
const m = 2;
const n = arr.length;
const rotated = [];

const steps = m % n;
let j = 0;

for (let i = n - steps; i < n; i++) {
  rotated[j] = arr[i];
  j++;
}

for (let i = 0; i < n - steps; i++) {
  rotated[j] = arr[i];
  j++;
}

console.log("Original:", arr);        
console.log("Rotated Right by 2:", rotated);
