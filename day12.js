/*
Problem: Isomorphic Strings - Custom Practice

Given two strings `s` and `t`, determine if they are isomorphic.

Two strings are isomorphic if the characters in `s` can be replaced to get `t`.
- Every character in `s` must map to exactly one character in `t`.
- No two characters in `s` may map to the same character in `t`.
- Characters must map consistently throughout the string.

Your task: Implement the function `isIsomorphic` to return `true` or `false`.

Example 1:
Input: s = "kick", t = "zapp"
Output: true

Example 2:
Input: s = "foo", t = "bar"
Output: false

Example 3:
Input: s = "abab", t = "cdcd"
Output: true

Example 4:
Input: s = "abcd", t = "aabb"
Output: false

Constraints:
- 1 <= s.length, t.length <= 10^4
- s.length === t.length
- s and t consist of any valid lowercase letters

 Hint:
Use two hash maps to ensure one-to-one mapping in both directions.
*/

function isIsomorphic(s, t) {
  if (s.length !== t.length) return false;

  const stoT = {}
  const ttoS = {}

  for(let i = 0; i<s.length; i++){
    const sChar = s[i]
    const tChar = t[i]

    // Check s → t mapping
    if(stoT[sChar]){
        if(stoT[sChar] !== tChar) return false;
    }else{
        stoT[sChar] = tChar
    }

    // Check t → s mapping
    if(ttoS[tChar]){
        if(ttoS[tChar] !== sChar) return false;
    }else{
        ttoS[tChar] = sChar
    }
  }
  return true
}

// Test cases
console.log(isIsomorphic("kick", "zapp")); // false
console.log(isIsomorphic("foo", "bar")); // false
console.log(isIsomorphic("abab", "cdcd")); // true
console.log(isIsomorphic("abcd", "aabb")); // false
console.log(isIsomorphic("paper", "title")); // true
