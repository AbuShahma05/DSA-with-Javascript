// ✅ Problem: Valid Parenthesis String with Wildcards
// Given a string s containing just the characters '(', ')', and '*',
// determine if the input string is valid.
//
// The '*' character can be treated as:
// - '('
// - ')'
// - or an empty string '' (i.e., removed)
//
// Constraints:
// - You must consider all possible valid interpretations of '*'
// - Return true if at least one valid way exists

function checkValidString(s) {
  let low = 0;
  let high = 0;

  for (let char of s) {
    if (char === '(') {
      low++;      // Must be opened
      high++;     // Could be opened
    } else if (char === ')') {
      low--;      // One open closed
      high--;     // One open closed
    } else if (char === '*') {
      // * can be '(', ')' or ''
      low--;      // assume it's ')'
      high++;     // assume it's '('
    }

    // If high < 0, too many ')' — invalid
    if (high < 0) return false;

    // Keep low >= 0 (we can't have negative open brackets)
    low = Math.max(low, 0);
  }

  // If low is 0, all open brackets are balanced
  return low === 0;
}

// 🔍 Test Cases
console.log(checkValidString("(*)"));     // true
console.log(checkValidString("(*))"));    // true
console.log(checkValidString("((*)"));    // true
console.log(checkValidString("(*)))"));   // false
console.log(checkValidString("()"));      // true
console.log(checkValidString("*"));       // true
