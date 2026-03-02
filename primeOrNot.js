/* 
Input:N = 2          
Output:True                
Explanation: 2 is a prime number because it has two divisors: 1 and 2 (the number itself).
*/

function primeNumberCheck(n) {
  if (n <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

let n = 2;
console.log(primeNumberCheck(n));
