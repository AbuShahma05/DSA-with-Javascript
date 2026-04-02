/* 
Hashing | Maps | Time Complexity | Collisions | Division Rule of Hashing |

Hashing: 
Example : Array: [1, 2, 1, 3, 2]
Queries: 1, 3, 4, 2

Without Hashing (Slow way) : Time = O(N × Q) → very slow for big inputs

With Hashing (Smart way) : Step 1: Pre-store

Make a frequency array:

index:  0 1 2 3 4 ...
value:  0 2 2 1 0 ...

Meaning:

1 appears 2 times
2 appears 2 times
3 appears 1 time

Step 2: Fetch (super fast)

Now:

Query 1 → just check hash[1] = 2
Query 4 → hash[4] = 0

⏱ Time = O(N + Q) → much faster

Character Hashing (same idea)

String: "abcdabefc"

We count characters:

Instead of numbers, we use letters.

Trick:
'a' → 0
'b' → 1
'c' → 2
...

So:

hash['a' - 'a']++
Example result:
a → 2
b → 2
c → 2
z → 0

Problem: What if numbers are HUGE? (like 10⁹)

You can’t create an array of size 1 billion 

Solution: Use Map / HashMap

Instead of array:

key → value
1   → 2
2   → 2
3   → 1

Now you only store what exists.

ollision (fun part)

Sometimes two numbers go to same index.

Example:

28 % 10 = 8
38 % 10 = 8
48 % 10 = 8

All go to index 8 

This is called collision

Solution:

Store them in a list (chain) at that index

*/