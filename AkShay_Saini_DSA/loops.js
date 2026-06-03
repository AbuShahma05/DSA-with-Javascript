for (let i = 0; i < 10; i++) {
  console.log("Hello world", +i);
}

for (let i = 2; i < 9; i = i + 2) {
  console.log("Hello World", +i);
}

for (let i = 5; i > 0; i = i - 1) {
  console.log("Hello World", +i);
}

function greet() {
  console.log("Namaste");
}

for (let i = 0; i < 10; i++) {
  greet();
}

/* 
Print all the even number in the array
*/

let arr = [2, 5, 8, 7, 4, 5, 8];

for (let i = 0; i < arr.length; i++) {
  if (arr % 2 === 0) {
    console.log(arr[i]);
  }
}
