var num = [1, 2, 3, 4, 5, 6, 7]

var result = num.filter((currentValue, currentIndex, arr) => {
    ///console.log(currentValue);
    return currentValue != 4
})

console.log(result);