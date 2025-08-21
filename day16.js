// Print numbers from 1 to N
function print1toN(n) {
  if (n === 0) return;
  print1toN(n - 1);
  console.log(n);
}

print1toN(5);

// Print numbers from N to 1
function printnto1(n1) {
  if (n1 === 0) return;
  console.log(n1);
  printnto1(n1 - 1);
}

printnto1(5);

// Factorial of a number using recursion
function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}

console.log(factorial(5));

// Sum of first N even numbers
function sumOfEvenNumber(n) {
  if (n === 0) return 0; 
  return 2 * n + sumOfEvenNumber(n - 1); 
}

console.log(sumOfEvenNumber(4)); 


// Reverse printing a string using recursion
function reverseString(str, index = str.length - 1) {
  if (index < 0) return ""; 
  return str[index] + reverseString(str, index - 1); 
}

console.log(reverseString("hello")); 

// sum of first odd number
function sumofOddnumber (n){
  if ( n === 0) return 0
  return( 2*n -1 ) + sumofOddnumber(n-1)
}

console.log(sumofOddnumber(4));
