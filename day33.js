let input = [4, 5, 2, 25];
let output = [];

for (let i = 0; i < input.length; i++) {
  let nextGreater = -1; // Default if no greater element found
  for (let j = i + 1; j < input.length; j++) {
    if (input[j] > input[i]) {
      nextGreater = input[j];
      break; // Stop at first greater element
    }
  }
  output.push(nextGreater);
}

console.log(output);
