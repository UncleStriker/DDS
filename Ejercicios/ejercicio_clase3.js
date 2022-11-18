// 1.- se debe crear 3 variables 
// numericas con valores random
// de la siguente manera

var a = Math.random();
var b = Math.random();
var c = Math.random();

if((a>b)&&(a>c)){
    console.log(`El numero mayor fue A: ${a}`)
}
if((b>a)&&(b>c)){
    console.log(`El numero mayor fue B: ${b}`)
}
if((c>a)&&(c>b)){
    console.log(`El numero mayor fue C: ${c}`)
}

console.log("variable A : ",a);
console.log("variable B : ",b);
console.log("variable C : ",c);


