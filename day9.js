// Problem: Length of First Word
// Given a string s consisting of words and spaces, return the 
// length of the first word in the string.
//
// A word is a maximal substring consisting of non-space characters only.
//
// Examples:
// Input: "   Hello World"       ➞ Output: 5
// Input: "   fly me to the moon" ➞ Output: 3
// Input: "luffy is still joyboy" ➞ Output: 5

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfTheFirstWord = function(s) {
    let length = 0;
    let i = 0;

    // Step 1: Skip leading spaces
    while (i < s.length && s[i] === " ") {
        i++;
    }

    // Step 2: Count characters until next space or end of string
    while (i < s.length && s[i] !== " ") {
        length++;
        i++;
    }

    return length;
};

// ✅ Test Cases
console.log(lengthOfTheFirstWord("   Hello World"));         // Output: 5
console.log(lengthOfTheFirstWord("   fly me to the moon"));  // Output: 3
console.log(lengthOfTheFirstWord("luffy is still joyboy"));  // Output: 5
console.log(lengthOfTheFirstWord("      single"));           // Output: 6
console.log(lengthOfTheFirstWord("nospacehere"));            // Output: 11
