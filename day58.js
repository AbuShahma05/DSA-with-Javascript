let arr = [4, 9, 0, 2, 8, 7, 1];

let firstLargest = -Infinity;
let secondLargest = -Infinity;

function findSecondLargest(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > firstLargest) {
      secondLargest = firstLargest;
      firstLargest = arr[i];
    } else if (arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }
  console.log(`value of second largest is : ${secondLargest}`);
}

findSecondLargest(arr);

// Edge case problem
let arr1 = [10, 2, 8, -9, 11, 20, 20];

function secondLargtNum(arr1) {
  let frstLargestNum = -Infinity;
  let scndLagrstNum = -Infinity;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1.length === 0) {
      return -1;
    } else if (arr1[i] > frstLargestNum) {
      scndLagrstNum = frstLargestNum;
      frstLargestNum = arr1[i];
    } else if (arr1[i] > scndLagrstNum && arr1[i] !== frstLargestNum) {
      scndLagrstNum = arr1[i];
    }
  }
  console.log(`value of second largest is : ${scndLagrstNum}`);
}

secondLargtNum(arr1);
