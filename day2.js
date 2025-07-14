// sum of a array

let num = [10,20,30,40,50]
let sum = 0;

for(let i =0; i<num.length; i++){
     sum += num[i]
}
console.log(sum);

// min of array

let num1 = [10,20,50,30, 2]
let min = num1[0]

for(let i = 0; i <num1.length; i++){
    if(num1[i] < min ){
        min = num1[i]
        console.log(min);
        
    }
}

// second max element find out

let arr = [10,20,30,40,60,64]
let max = Math.max(arr[0], arr[1])
let smax = Math.min(arr[0], arr[1])

for(let i = 2; i<arr.length; i++){
    if(arr[i] > max){
        smax = max
        max = arr[i]
    }else if(arr[i] > smax && max!= arr[i]){
        smax = arr[i]
    }
}
console.log(smax);

