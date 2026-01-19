// Binary search
let arr = [1, 2, 3, 5, 8, 9, 10, 12];
let target = 12;

var binary = function (arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);

    if (arr[middle] === target) {
      return middle;
    } else if (arr[middle] < target) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }
  return -1;
};

console.log(binary(arr, target));
