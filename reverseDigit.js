/* 
Given an integer N return the reverse of the given number.
Input: N = 12345
Output:54321
Explanation: The reverse of 12345 is 54321.
*/

function reverseDigit(n) {
  n = Math.abs(n);
  let reverse = 0;

  while (n > 0) {
    let lastDigit = n % 10; // last digit findout
    reverse = reverse * 10 + lastDigit; // reverse
    n = Math.floor(n / 10); // last digit out
  }

  return reverse;
}

let n = 12345;
console.log(reverseDigit(n)); // 54321
