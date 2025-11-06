let num = 121;
let copy = num;
let rev = 0;

function palindromeNum(num) {
  if (num < 0) {
    return false;
  }

  while (num > 0) {
    let rem = num % 10;
    rev = 10 * rev + rem;
    num = Math.floor(num / 10);
  }
  if (rev === copy) {
    console.log(`Number is palindrome ${rev}`);
  } else {
    false;
  }
}

palindromeNum(num);
