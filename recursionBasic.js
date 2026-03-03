/* 
Print Name N times using Recursion

Input: N = 3
Output: Ashish Ashish Ashish 

Explanation: Name is printed 3 times.
*/

function printName(n) {
  if (n == 0) return;
  console.log("Ashish");
  printName(n - 1);
}

let n = 3;
printName(n);

/* 
Print 1 to N using Recursion 

Input: N = 4
Output: 1, 2, 3, 4
Explanation: All the numbers from 1 to 4 are printed.
*/
function print1toN(n1) {
  if (n1 === 0) return;

  print1toN(n1 - 1);
  console.log(n1);
}

let n1 = 4;
print1toN(n1);

/* 
Print N to 1 using Recursion

Input: N = 4
Output: 4, 3, 2, 1
Explanation: All the numbers from 4 to 1 are printed.
*/

function printNto1(n2) {
  if (n2 === 0) return;

  console.log(n2);
  printNto1(n2 - 1);
}

let n2 = 4;
printNto1(n2);

/* 
Sum of first N Natural Numbers

Input: N=5
Output: 15
Explanation: 1+2+3+4+5=15
*/

function sum(n3) {
  if (n3 === 0) return 0;

  return n3 + sum(n3 - 1);
}

let n3 = 5;
console.log(sum(n3));

/* Factorial of a Number : Iterative and Recursive

Input: X = 5
Output: 120
Explanation: 5! = 5*4*3*2*1
*/

function factorial(x) {
  if (x === 1) return 1;

  return x * factorial(x - 1);
}

let x = 5;
console.log(factorial(x));

/* 
Reverse a given Array

Input: N = 5, arr[] = {5,4,3,2,1}
Output: {1,2,3,4,5}
Explanation: Since the order of elements gets reversed the first element will occupy the fifth position, the second element occupies the fourth position and so on.
*/

let arr = [1, 2, 3, 4, 5];

function reverseArray(arr) {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }

  console.log(arr);
}

reverseArray(arr);

/* 
Check if the given String is Palindrome or not

Example 1:
Input: Str =  “ABCDCBA”
Output: Palindrome
Explanation: String when reversed is the same as string.
*/

function palindromeCheck(str) {
  let start = 0;
  let end = str.length - 1;

  while (start < end) {
    if (str[start] !== str[end]) {
      console.log(`${str} is NOT a palindrome`);
      return;
    }
    start++;
    end--;
  }

  console.log(`${str} is a palindrome`);
}

palindromeCheck("ABCDCBA");
palindromeCheck("ABCDCBAsdkh");
