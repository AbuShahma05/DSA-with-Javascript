let n = 4;

function printStar(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n; j++) {
      row = row + "*";
    }
    console.log(row);
  }
}

printStar(n);

let star = 12;

function oneToManyPrint(star) {
  for (let i = 0; i < star; i++) {
    let printTotal = "";
    for (let j = 0; j <= i; j++) {
      printTotal = printTotal + "*";
    }
    console.log(printTotal);
  }
}

oneToManyPrint(star);

let num1 = 5;

function printNum(num1) {
  for (let i = 1; i <= num1; i++) {
    let result = "";
    for (let j = 1; j <= i; j++) {
      result = result + j + "";
    }
    console.log(result);
  }
}

printNum(num1);

let num2 = 5;

function printNum1(num2) {
  for (let i = 0; i < num2; i++) {
    let row = "";
    for (let j = 0; j < num2 - i; j++) {
      row = row + (j + 1);
    }
    console.log(row);
  }
}

printNum1(num2);

let num3 = 5;

function reversStarPrint(num3) {
  for (let i = 0; i < num3; i++) {
    let starPrint = "";
    for (let j = 0; j < num3 - i; j++) {
      starPrint = starPrint + "*";
    }
    console.log(starPrint);
  }
}

reversStarPrint(num3);

let num4 = 5;

function printStar1(num4) {
  for (let i = 0; i < num4; i++) {
    let row = "";

    // for the space
    for (let j = 0; j < num4 - (i + 1); j++) {
      row = row + " ";
    }
    // for the star print
    for (let k = 0; k < i + 1; k++) {
      row = row + "*";
    }
    console.log(row);
  }
}

printStar1(num4);
