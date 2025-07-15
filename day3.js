// reverse array without extra space
let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let i = 0;
let j = arr1.length - 1;
while (i < j) {
  let temp = arr1[i];
  arr1[i] = arr1[j];
  arr1[j] = temp;
  i++;
  j--;
}
console.log(arr1);

//Segregate 0s and 1s using Two Pointer Approach
let arr = [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0];

let first = 0;
let last = 0;
while(first <arr.length){
  if(arr[first] == 0){
    let temp = arr[first]
    arr[first] = arr[last]
    arr[last] = temp
    last++
  }
   first ++
}
console.log(arr);

// Left Rotate an Array by One Position
let arr2 = [1,2,3,4,5]
let copy = arr2[0]

for(let i =0; i<arr2.length-1; i++){
   arr2[i] = arr2[i+1]
}
arr2[arr2.length-1] = copy
console.log(arr2);

// Right Rotate an Array by One Position 
let arr3 = [1,2,3,4,5]

let copy1 = arr3[arr3.length-1]
for(let i = arr3.length-1; i>0; i--){
  arr3[i] = arr3[i-1]
} 
arr3[0] = copy1
console.log(arr3);

