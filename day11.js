// Question: Check if Two Strings Are Anagrams

// Write a function that takes two strings and 
// returns true if they are anagrams of each other.
// An anagram is a word or phrase formed by rearranging
//  the letters of another,
// using all the original letters exactly once.

// Example:
// Input: "listen", "silent"
// Output: true
// Explanation: Both strings contain the same characters in different order.

// Input: "hello", "world"
// Output: false

// Constraints:
// - Ignore case (case-insensitive)
// - Ignore spaces and non-alphabet characters

function areAnagrams(str1, str2) {
    // Helper to clean and sort string
    const cleanString = (str) => {
        return str
            .toLowerCase()                         // Convert to lowercase
            .replace(/[^a-z0-9]/g, '')              // Remove non-alphanumeric chars
            .split('')                              // Convert to array
            .sort()                                 // Sort characters
            .join('');                              // Back to string
    };

    return cleanString(str1) === cleanString(str2);
}

// Test cases
console.log(areAnagrams("Listen", "Silent"));        
console.log(areAnagrams("Hello", "Olelh"));          
console.log(areAnagrams("Dormitory", "Dirty room")); 
console.log(areAnagrams("Good", "Dog"));             
