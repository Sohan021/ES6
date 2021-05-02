///null is an assigned value.
//It means nothing.undefined typically means a variable has been declared but not defined yet

var a = '';
var b;

console.log(a);
console.log(b);

var result1 = (b == a) ? "T" : "F";

var result2 = (a == b) ? "T" : "F";

console.log("Result1: ", result1);

console.log("Result2: ", result2);