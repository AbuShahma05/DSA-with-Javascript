for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    console.log(i, j);
  }
}

for (let i = 0; i < 3; i++) {
  for (let j = 0; j < i; j++) {
    console.log(i, j);
  }
}

for (let i = 0; i < 3; i++) {
  for (let j = i; j > 0; j--) {
    console.log(`value of i: ${i} : value of j: ${j}`);
  }
}
