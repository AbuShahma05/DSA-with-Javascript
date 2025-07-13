let s = "hello"
let rev = "";

for(let i = s.length-1; i>=0; i-- ){
    rev = rev + s.charAt(i)
    
}

if (rev === s) {
    console.log("pallindrome");
    
}
else{
    console.log("No pallindrome");
    
}