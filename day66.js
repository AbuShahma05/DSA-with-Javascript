let s = ["h", "e", "l", "l", "o"];

function reverseString(s) {
  let n = s.length;
  let halfLen = Math.floor(n / 2);

  for (let i = 0; i < halfLen; i++) {
    // swapping s[i], s[len-1-i]
    let temp = s[i];
    s[i] = s[n - 1 - i];
    s[n - 1 - i] = temp;
  }
}

reverseString(s);
console.log(s);
