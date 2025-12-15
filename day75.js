let nums = [0,1,0,3,12]

var moveZeroes = function(nums){
    let x = 0;

    for(let i = 0; i < nums.length; i++){
        if(nums[i] !== 0){
            nums[x] = nums[i]
            x++
        }
    }

    // Fill all the remaining elements
    for(let i = x; i < nums.length; i++){
        nums[i] = 0
    }

    return nums   
    
    /* If You dont want to write return then simply do
    moveZeroes(nums)
    console.log(nums)  then it prints the nums 
    */
}

// moveZeroes(nums)   Function call
// console.log(nums);  Print result

console.log(moveZeroes(nums));



