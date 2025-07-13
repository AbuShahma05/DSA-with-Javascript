/* 
   1. Integer to Roman
   Input: num = 58
   Output: "LVIII"
*/

function intToRoman(num) {
  const romanValues = [
    {
      value: 1000,
      Symbol: "M",
    },
    {
      value: 500,
      Symbol: "D",
    },
    {
      value: 100,
      Symbol: "C",
    },
    {
      value: 50,
      Symbol: "L",
    },
    {
      value: 10,
      Symbol: "X",
    },
    {
      value: 5,
      Symbol: "V",
    },
    {
      value: 1,
      Symbol: "I",
    },
  ];

  let result = "";

  for (let i = 0; i < romanValues.length; i++) {
    while (num >= romanValues[i].value) {
      result += romanValues[i].Symbol;
      num -= romanValues[i].value;
    }
  }
  return result;
}

console.log(intToRoman(150));
