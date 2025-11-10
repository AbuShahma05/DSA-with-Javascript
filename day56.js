/* 

write a function that searches for an element inside an array and returns
 the index ,if the element is not present then just return -1

*/
let arr = [4, 2, 0, 10, 8, 30];
let findnum = 10;

function searchElement(arr) {
  let found = false;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === findnum) {
      console.log("Found at index", i);
      found = true;
      break;
    }
  }

  if(!found){
    console.log(-1);
    
  }
}

searchElement(arr);
