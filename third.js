// Write a program that takes a number and checks whether it is even or odd.

let num = 7;
if (num % 2 === 0) {
  console.log("Number is even");
} else {
  console.log("Number is odd");
}

// Check Eligibility to Vote

let age = 17;
if (age >= 18) {
  console.log("You can vote");
} else {
  console.log("You can't vote");
}

// Compare Two Numbers

let a = 10;
let b = 90;

if (a > b) {
  console.log(`${a} is greater than ${b}`);
} else if (b > a) {
  console.log(`${b} is greater than ${a}`);
} else {
  console.log("Both numbers are equal");
}

// Input a student's score (0–100) and print the grade:

let studentScore = -96

if (studentScore >= 90) {
  console.log("Grade A");
} else if (studentScore >= 80 && studentScore <= 89) {
  console.log("Grade B");
} else if (studentScore >= 70 && studentScore <= 79) {
  console.log("Grade C");
} else if (studentScore >= 60 && studentScore <= 69) {
  console.log("Grade D");
} else if (studentScore >= 0 && studentScore <= 59) {
    console.log("Fail");
    
}else{
    console.log("Invalid Number");
    
}

// Check Leap Year

let year = 4008

if (year % 4 === 0  || year % 400 === 0) {
    console.log(`${year} is leap year`);
    
}else{
    console.log(`${year} is not leap year`);
    
}

// Check Sign of Number

let number = 21

if (number > 0) {
    console.log(`${number} is positive number`);
    
}else if (number < 0) {
    console.log(`${number} is negative number`);
    
}else{
    console.log(`${number}`);
    
}

// Max of Three Numbers

let num1 = 10
let num2 = 20
let num3 = 30

if (num1 > num2 && num1 > num3) {
    console.log(`num1 = ${num1} is greater`);
    
}else if (num2 > num1 && num2 > num3) {
        console.log(`num2 = ${num2} is greater`);
        
}else{
    console.log(`num3 = ${num3} is greater`);
    
}


