let greet = "Hello"
console.log(greet.length);
console.log(greet.slice(1,4)); // 1 means second index and 4 means 4 -1 index
console.log(greet.slice(-3, greet.length)); // -3 also do -3-1 = -2 index pick

let something = "          whatsup       "
console.log(something.trim());
console.log(greet.toUpperCase());
console.log(greet.toLocaleLowerCase());
console.log(greet.charAt(2));
console.log(greet[2]);

for(let i =0; i < greet.length; i++){
    console.log(greet[i]);
    
}

for(let i = greet.length -1; i >= 0; i--){
   console.log(greet.charAt(i));
}

// Reverse the string
let rev = ""
for(let i = greet.length-1; i>= 0; i--){
    rev += greet.charAt(i)
}

console.log(rev);

// Check the string is pallindrome or not
// first of all rev the string

let str = "RAR"
let rev1 = ""

for(let i = str.length-1; i >= 0; i--){
    rev1 = rev1 + str.charAt(i)
}

if(rev1 == str){
    console.log("pallindrom");
    
}else{
    console.log("Not pallindrom");
    
}


// Best way to solve pallindrome 

let name = "namana"
let isPallindrome = true;

let i = 0
let j = name.length-1

while(i < j){
    if(name.charAt(i) != name.charAt(j)){
        isPallindrome = false;
        break
    }
    i++
    j--
}

if(isPallindrome){
    console.log("pallindrome");
    
}else{
    console.log("no pallindrome");
    
}

// Togglea each element
let s = "somehtingABCDEFGH"
console.log(s);

let toggle = ""
for(let i =0; i < s.length-1; i++){
    let ch = s.charCodeAt(i)

    if(ch >= 65 && ch <= 90){
        toggle = toggle + String.fromCharCode(ch + 32)
    }else if(ch>=65 && ch>=122){
        toggle = toggle + String.fromCharCode(ch-32)
    }
}

console.log(toggle);

// frequency of each character

