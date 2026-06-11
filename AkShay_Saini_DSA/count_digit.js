/* 
write a function that returns the count of digits in a number
*/

function countDigit(num) {
  num = Math.abs(num);

  if (num === 0) return 1;

  let count = 0;

  while (num > 0) {
    num = Math.floor(num / 10);
    count++;
  }

  return count;
}

console.log(countDigit(259)); // 3
console.log(countDigit(0)); // 1
console.log(countDigit(-259)); // 3
