let num = 259;
let count = 0;

function countNumber(num) {
  if (num === 0) {
    return 1;
  }
  while (num > 0) {
    num = Math.floor(num / 10);
    count++;
  }
  console.log(`Count is : ${count}`);
}

countNumber(num);
