//annonymus or dynamic
var func = function (value) {
    return `${value}`;
}



//arrow
arFunc = (value) => {
    return `${value}`;
}
//arrow
arFunc = (value) => `${value}`;

console.log(func("Function"));
console.log(arFunc("arow"));
console.log(arFunc("arrow"));