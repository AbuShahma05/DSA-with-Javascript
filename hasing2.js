let arr = [10, 5, 10, 15, 10, 5];
let freqMap = {};

// Count frequencies
for (let i = 0; i < arr.length; i++) {
  if (freqMap[arr[i]]) {
    freqMap[arr[i]] = freqMap[arr[i]] + 1;  // already exists → add 1
  } else {
    freqMap[arr[i]] = 1;                     // new element → set to 1
  }
}

// Print result
for (let key in freqMap) {
  console.log(key + " occurs " + freqMap[key] + " times");
}