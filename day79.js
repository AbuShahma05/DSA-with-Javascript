let nums = [2, 2, 3, 4, 4, 5, 5];

// var singleNumber = function (nums) {
//   let hash = {};

//   // Count frequency of each number
//   for (let i = 0; i < nums.length; i++) {
//     if (!hash[nums[i]]) {
//       hash[nums[i]] = 1;
//     } else {
//       hash[nums[i]]++;
//     }
//   }

//   // Find the number that appears once
//   for (let i = 0; i < nums.length; i++) {
//     if (hash[nums[i]] === 1) {
//       return nums[i];
//     }
//   }
// };

// console.log(singleNumber(nums));

var singleNumber = function(nums){
    let xor = 0;

    for(let i = 0; i < nums.length; i++){
        xor = xor ^ nums[i]
    }
    return xor
}

console.log(singleNumber(nums));


// When XOR Will NOT Work: 

// If a number appears 3 times

// If there are two unique numbers

// If frequency ≠ 2 for duplicates