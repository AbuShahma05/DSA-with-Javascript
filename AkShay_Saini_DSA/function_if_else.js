function printHelloWorld() {
  console.log("Hello World");
}

printHelloWorld();

function greet(name) {
  console.log("Hello", +name);
}

greet("Abu Shahma");

function sum(a, b) {
  let add = a + b;
  console.log(add);
}

sum(5, 10);

function multiply(a, b) {
  let mult = a * b;
  console.log(mult);
}

multiply(2, 4);

function square(x) {
  let result = x * x;
  return result;
}

let value = square(4);
console.log(value);

function eligibleToVote(age) {
  if (age < 0) {
    console.log("Invalid Input");
  } else if (age < 18) {
    console.log("Not eligible to vote");
  } else {
    console.log("Eligible to vote");
  }
}

eligibleToVote(20);

/* 
Create a function to check if a number is Even or Odd
*/

function isEvenOrOdd() {
  let rem = num % 2;

  if (rem === 0) {
    console.log("Even Number");
  } else {
    console.log("Odd Number");
  }
}

isEvenOrOdd(6);
isEvenOrOdd(13);
