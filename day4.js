// Rotate an Array Left by K Steps (Using Shifting / Brute Force Approach)

const prompt = require("prompt-sync")(); 

let arr = [1,2,3,4,5]
let k = Number(prompt("Enter k value"))
k = k % arr.length
for(let j = 0; j<k; j++){
    let copy = arr[0]
    for(let i =0; i<arr.length-1; i++){
        arr[i] = arr[i+1]
    }
    arr[arr.length-1] = copy
}
console.log(arr);

// Rotate an Array by K Steps (Using Temporary Array / Extra Space)

let arr1 = [1,2,3,4,5]
let temp = new Array(arr1.length)
let k1 = Number(prompt("Enter k1 value"))
k1 = k1%arr1.length

for(let i =0;  i<arr1.length; i++){
    temp[i] = arr1[(i+k1) % arr1.length]
}
console.log(temp);

// Rotate an Array by K Steps (Using Reversal Algorithm)

let arr2 = [1,2,3,4,5]
let k3 = Number(prompt("Enter a value"))
k3 = k3 % arr2.length
reverse(0, k3-1)
reverse(k3, arr2.length-1)
reverse(0, arr2.length-1)
console.log(arr2);

function reverse(i, j){
    while(i < j){
        let temp = arr2[i]
        arr2[i] = arr2[j]
        arr2[j] = temp
        i++
        j-- 
    }
}

