// Right-Angled Triangle

let n = 5;

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= i; j++) {
    process.stdout.write("* ");
  }
  console.log(); // move to next line
}
console.log();

// Inverted Right-Angled Triangle

let num = 5;

for (let i = 1; i <= num; i++) {
  for (let j = num; j >= i; j--) {
    process.stdout.write("* ");
  }
  console.log(); // move to next line
}
console.log();

// Number Triangle

for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= i; j++) {
    process.stdout.write(j + " ");
  }
  console.log();
}

// Pyramid Pattern

let num1 = 5;

for (let i = 1; i <= num1; i++) {
  // Print spaces
  for (let space = 1; space <= num1 - i; space++) {
    process.stdout.write(" ");
  }

  // Print stars
  for (let star = 1; star <= i; star++) {
    process.stdout.write("* ");
  }

  console.log();
}

// Floyd's Triangle

let num2 = 4;
let count = 1;

for (let i = 1; i <= num2; i++) {
  for (let j = 1; j <= i; j++) {
    process.stdout.write(count + " ");
    count++;
  }
  console.log();
}
