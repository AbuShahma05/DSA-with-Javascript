let s = "()[{}]";

let stack = [];
let map = {
  ")": "(",
  "}": "{",
  "]": "[",
};

for (let i = 0; i < s.length; i++) {
  let char = s[i];
  if (char === "(" || char === "{" || char === "[") {
    stack.push(char);
  } else {
    if (stack.length === 0 || stack.pop() !== map[char]) {
      console.log(false);
      return;
    }
  }
}

console.log(stack.length === 0);
