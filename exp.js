// max element in an array
let a = [1,2,65,34,45]
let max = a[0]

for(let i = 1; i < a.length; i++){
    if(a[i] > max)
        max = a[i]
}

 console.log(max);

//  check an array is sorted or not

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < arr1.length - 1; i++) {
  if (arr1[i] > arr1[i + 1]) {
    console.log("array is not sorted");
    return false;
  }
  console.log("array is sorted");
  return true;
}

// check an array is sorted or not

const arr2 = [2, 1, 4, 3, 5, 6];

for (let i = 0; i < arr2.length - 1; i++) {
  if (arr2[i] > arr2[i + 1]) {
    console.log("array is not sorted");
    return false;
  }
  console.log("array is sorted");
  return true;
}

//  Reverse an array
const arr3 = [1, 2, 3, 4, 5];

for (let i = 0; i < arr3.length / 2; i++) {
    let temp = arr3[i];
    arr3[i] = arr3[arr3.length - 1 - i];
    arr3[arr3.length - 1 - i] = temp;
}

console.log(arr3); 