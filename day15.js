// Recursion is a programming technique where a function calls itself repeatedly to
// solve a problem

enjoy();
function enjoy() {
  console.log("pawri ho rhi hai");
  enjoy2();
}

function enjoy2() {
  console.log("we are in dubai");
  enjoy3();
}

function enjoy3() {
  console.log("we are in america");
}

// recursion
function temp(n) {
  if (n === 0) return;
  console.log("Hello World");
  temp(n - 1);
}
temp(5);

function printthenumber(n) {
  if (n === 0) return;
  console.log("Hello jii");
  printthenumber(n - 1);
}

printthenumber(5);

function printNumber(n) {
  if (n === 0) return;
  console.log(n);
  printNumber(--n);
}

printNumber(5);

// function printthenumber1 (n) {
//   if(n === 0) return;
//   console.log("Hello jii");
//   printthenumber1(n--)
// }

// printthenumber1(5) // infinite loop

function printftol(n) {
  if (n === 0) return;
  printftol(n - 1);
  console.log(n);
}
printftol(10);

function sum(n) {
  if (n == 1) return 1;
  return n + sum(n - 1);
}

console.log(sum(5));

function fiboNTerms(n, first, second) {
  if (n == 0) return;
  let third = first + second;
  process.stdout.write(third + " ");
  fiboNTerms(n - 1, second, third);
}

let n = 10;
process.stdout.write(0 + " " + 1 + " ");
fiboNTerms(n - 2, 0, 1);

function fibo(n1) {
  if (n1 == 0 || n1 == 1) return n1;
  return fibo(n1 - 1) + fibo(n1 - 2);
}
let n1 = 7;
console.log(fibo(n1));
