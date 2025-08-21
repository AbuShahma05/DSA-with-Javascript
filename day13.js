/* 
Question:
Given a string s, find the length of the longest substring without repeating characters.

A substring is a contiguous sequence of characters within the string.
You must return the length of the longest such substring without using built-in 
methods like substring or slice.

Examples:

Input: s = "abcabcbb"
Output: 3
Explanation: The longest substring without repeating characters is "abc".

Input: s = "bbbbb"
Output: 1
Explanation: The longest substring without repeating characters is "b".

Input: s = "pwwkew"
Output: 3
Explanation: The longest substring without repeating characters is "wke".

Constraints:
- 0 <= s.length <= 50,000
- s consists of English letters, digits, symbols, and spaces.
*/

function lengthOfLongestSubstring(s) {
    let start = 0;
    let maxLength = 0;
    let map = {}; // To store character positions

    for (let end = 0; end < s.length; end++) {
        let char = s[end];

        // If character seen before and inside the current window
        if (map[char] !== undefined && map[char] >= start) {
            start = map[char] + 1;
        }

        map[char] = end;

        let currentLength = end - start + 1;
        if (currentLength > maxLength) {
            maxLength = currentLength;
        }
    }

    return maxLength;
}

console.log(lengthOfLongestSubstring("abcabcbb")); 
console.log(lengthOfLongestSubstring("bbbbb"));    
console.log(lengthOfLongestSubstring("pwwkew"));   
