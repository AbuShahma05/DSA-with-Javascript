/* 
Reverse Integer
*/

function reverseInteger(x) {
  let revInt = 0;
  let copy = x;

  x = Math.abs(x);

  while (x > 0) {
    let rem = x % 10;
    revInt = revInt * 10 + rem;
    x = Math.floor(x / 10);
  }

  let limit = Math.pow(2, 31);

  if (revInt >= limit) return 0;

  return copy < 0 ? -revInt : revInt;
}

console.log(reverseInteger(127));
