// let n = 4;

// function printStar(n) {
//   for (let i = 0; i < n; i++) {
//     let row = "";
//     for (let j = 0; j < n; j++) {
//       row = row + "*";
//     }
//     console.log(row);
//   }
// }

// printStar(n);

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

oneToManyPrint(star)
