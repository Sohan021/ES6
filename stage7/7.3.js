///condioion approved then work break
///nor effect main array

var num = [1, 2, 3, 4, 5, 6, 7]

// var result = num.find(function (currentValue, currentIndex, arr) {
//     return currentValue>4
// }, this)

var result = num.find((currentValue, currentIndex, arr) => {
    return currentValue > 4
})

console.log(result);