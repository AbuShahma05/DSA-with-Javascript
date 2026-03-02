/* 
Check if a number is Armstrong Number or not

Example 1:
Input:N = 153
Output:True
Explanation: 1^3+5^3+3^3 = 1 + 125 + 27 = 153
*/

function armstrongValue(n) {
  let originalValue = n;
  let add = 0;

  while (n > 0) {
    // lastdigit find
    let lastDigit = n % 10;
    let newValue = lastDigit ** 3;
    add = add + newValue;
    n = Math.floor(n / 10);
  }
  return add === originalValue;
}

let n = 153;
console.log(armstrongValue(n));
