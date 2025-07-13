let age = Number(prompt("enter you age"));

if (isNaN(age)) {
  console.log("write a valid number");
} else if (age >= 18) {
  console.log("You can vote");
} else {
  console.log("you cant vote");
}

// Discount quesiton

let amount = Number(prompt("Total amount"));

if (isNaN(amount) || amount <= 0) {
  console.log("Write valid number");

} else if (amount > 0 && amount <= 5000) {
  console.log(amount);

} else if (amount >= 5001 && amount <= 7000) {
  console.log(amount - Math.floor((5 * amount) / 100));

} else if (amount >= 7001 && amount <= 9000) {
  console.log(amount - Math.floor((10 * amount) / 100));

} else if (amount > 9000) {
  console.log(amount - Math.floor((20 * amount) / 100));
}

// Ternary operator
let num = -10
console.log(num >0 ? "Positive" : num<0? "Negative" : "Zero");

// Tricky Question 
// loating-point precision issues in JavaScript
let num1 = +(0.1 + 0.2).toFixed(1)

switch(num1){
    case 0.3 : console.log("Hello");
    break

    case 0.4: console.log("Hey");
    break

    default : console.log("namaste");
    
}
