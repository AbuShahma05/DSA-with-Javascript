let x = 127;
let copy = x;
let revInt = 0;

function reverseInteger(x) {
  x = Math.abs(x);
  while (x > 0) {
    let rem = x % 10;
    revInt = 10 * revInt + rem;
    x = Math.floor(x / 10);
  }
  let limit = Math.pow(2, 31);
  if (revInt < -limit || revInt > limit) return 0;

  console.log(copy < 0 ? -revInt : revInt);
}

reverseInteger(x);
