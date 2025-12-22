/* 
                           RECURSION

Function calls itself to solve smaller versions of the same problem.

Two parts of recursion : -

1 > Base Case : - Stop condition (when to stop calling itself)

2 > Recursive Case : - Part where function calls itself

REAL LIFE EXAMPLES: -

1 > Queue of people
2 > Comment threads
3 > Organisational hierarchies

COMMON MISTAKES : -

1 > Missing base case - Stack Overflow

2 > Not simplyfying the input - never reaches base case 

3 > Too deep recursion - Large inputs

4 > Keeping in mind the time complexity

. > One golden line to remember 

1 > Before recursion → descending output
2 > After recursion → ascending output

*/

// function fun() {
//   console.log("Hello jiii");
//   fun();
// }

// fun(); /*  Infinite loop */

// Print numbers from N to 1 using recursion
function fun(num) {
  if (num == 0) return;

  console.log(num);
  num = num - 1;
  fun(num);
}

a = 5;
fun(a);

// Print numbers from N to 1 using recursion
var printNtoOne = function (num) {
  if (num == 0) {
    return;
  }

  console.log(num);
  num = num - 1;
  printNtoOne(num);
};

let num = 10;
printNtoOne(num);

// Print numbers from N to 1 using recursion
function printNtoOne(n) {
  if (n === 0) return;

  console.log(n);
  printNtoOne(n - 1);
}

let n = 5;
printNtoOne(n);

// Print numbers from 1 to N using recursion
function printOneToN(n) {
  if (n === 0) return;

  printOneToN(n - 1);
  console.log(n);
}

printOneToN(5);

