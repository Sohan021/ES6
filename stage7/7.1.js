let arr = ['A', 'B', 'C', 1, 2, 3];

console.log(arr.length)

arr.forEach(function (item, index, array) {
    console.log(item, index, array)
})

var multi = [[1, 2, 3], [23, 24, 25]]
console.log(multi[0][0])
console.log(multi[0][1])
console.log(multi[0][2])
console.log(multi[1][0])
console.log(multi[1][1])
console.log(multi[1][2])