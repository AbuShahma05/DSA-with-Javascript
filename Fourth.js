// Print numbers from 1 to 10

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// Print even numbers from 1 to 20

for (let index = 2; index <= 20; index += 2) {
  console.log(index);
}

// Calculate the sum of numbers from 1 to n

let n = 5;
let sum = 0;

for (let index = 1; index <= n; index++) {
  sum += index;
}
console.log(sum);

// Reverse a string using a loop

let Input = "Hello";
let result = "";

for (let i = Input.length - 1; i >= 0; i--) {
  result += Input[i];
}

console.log("Reversed string", result);

// Check if a number is a prime

let inputnum = 7;
let primenum = true;

if (inputnum <= 1) {
  primenum = false;
} else {
  for (let i = 2; i <= Math.sqrt(inputnum); i++) {
    if (inputnum % i === 0) {
      primenum = false;
      break;
    }
  }
}

console.log(primenum ? `${inputnum} is Prime` : `${inputnum} is Not Prime`);


// Print the multiplication table of a number

for(let i = 5; i<=50; i += 5){
    console.log(i);
    
}