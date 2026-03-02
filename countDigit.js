/* 
Given an integer N, return the number of digits in N.
Example 1:
Input:N = 12345
Output:5
Explanation:  The number 12345 has 5 digits.
*/

function countDigit(n) {
  let count = 0;
  let N = Math.abs(n);

  while (N > 0) {
    N = Math.floor(N / 10);
    count++;
  }
  return count;
}

let N = 12345;
console.log(countDigit(N));
