///to find prticulr element

var num = ['A', 'B', 'C', 'D', 'E', 'F', 7]

var result = num.findIndex((currentValue, currentIndex, arr) => {
    return currentValue == 'D'
    //console.log(currentIndex)
})

console.log(result);