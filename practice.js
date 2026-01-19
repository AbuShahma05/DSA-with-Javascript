let arr = [3, 1, 4, 1, 5, 9];
let min = +Infinity;
let max = -Infinity;

for (let i = 1; i < arr.length; i++) {
  if (arr[i] < min) {
    min = arr[i];
  } else if (arr[i] > max) {
    max = arr[i];
  }
}

console.log("Minimum:", min);
console.log("Maximum:", max);