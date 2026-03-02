/* 
Given an integer N, return true if it is a palindrome else return false.
Example 1:
Input:N = 4554
Output:Palindrome Number
Explanation: The reverse of 4554 is 4554 and therefore it is palindrome number
*/

function palindrome(n) {
  let original = n;
  n = Math.abs(n);
  let reverse = 0;

  while (n > 0) {
    let lastDigitFind = n % 10;
    reverse = reverse * 10 + lastDigitFind;
    n = Math.floor(n / 10);
  }
  if (reverse === original) {
    console.log(`${original} is palindrome`);
  } else {
    console.log(`this is not palindrome`);
  }
}

let n = 4554;
console.log(palindrome(n));
