function printNm(n){
    if(n === 0) return

    console.log(n);
    printNm(n-1)
}

let n = 5;
printNm(5)

var printNumber = function(l){
    if(l == 0) return

    console.log(l);
    printNumber(l-1)
}

let l = 6
printNumber(l)
