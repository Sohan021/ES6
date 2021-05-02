//not effect main array
var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


var result = num.reduce((previousValue, currentValue, currentIndex, arr) => {
    return previousValue + currentValue;
},10)

console.log(result);