/*
 Problem: Subtract Binary

 Description:
Given two binary strings `a` and `b`, return their difference as a binary string (i.e., a - b).
You can assume:
- `a` is always greater than or equal to `b` (no negative results)
- Both strings consist only of '0' and '1'
- Output should not have leading zeros (except if the result is "0")

 Example 1:
Input: a = "1011", b = "101"
Output: "110"
Explanation:
  1011 (11 in decimal)
- 0101 (5 in decimal)
= 0110 (6 in decimal) → "110"

 Example 2:
Input: a = "1000", b = "1"
Output: "111"
Explanation:
  1000 (8 in decimal)
- 0001 (1 in decimal)
= 0111 (7 in decimal) → "111"

- 1 <= a.length, b.length <= 10^4
- a and b contain only '0' or '1'
- a >= b (no negative results)
*/

var subtractBinary = function(a, b) {
    let i = a.length - 1;
    let j = b.length - 1;
    let borrow = 0;
    let result = "";

    while (i >= 0) {
        let bitA = parseInt(a[i]);
        let bitB = j >= 0 ? parseInt(b[j]) : 0;

        bitA -= borrow;

        if (bitA < bitB) {
            bitA += 2;
            borrow = 1;
        } else {
            borrow = 0;
        }

        let diff = bitA - bitB;
        result = diff + result;

        i--;
        j--;
    }

    // Remove leading zeros
    result = result.replace(/^0+/, '');
    return result === "" ? "0" : result;
};

console.log(subtractBinary("1011", "101"));   
console.log(subtractBinary("1000", "1"));     
console.log(subtractBinary("10", "1"));       
console.log(subtractBinary("111", "111"));    
