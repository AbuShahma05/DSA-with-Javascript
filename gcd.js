/* 
Given two integers N1 and N2, find their greatest common divisor.
Example 1:
Input: N1 = 9, N2 = 12

Output: 3
Explanation:
Factors of 9: 1, 3, 9
Factors of 12: 1, 2, 3, 4, 6, 12
Common Factors: 1, 3
Greatest common factor: 3 (GCD)
*/

function findGCD(n1, n2) {
  // Step 1: Find the smaller number
  let min = Math.min(n1, n2);

  // Step 2: Store gcd value
  let gcd = 1;

  // Step 3: Loop from 1 to min
  for (let i = 1; i <= min; i++) {
    // If i divides both numbers
    if (n1 % i === 0 && n2 % i === 0) {
      gcd = i; // Update gcd
    }
  }

  // Step 4: Return gcd
  return gcd;
}

console.log(findGCD(9, 12)); // Output: 3
