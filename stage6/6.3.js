// const obj = {
//     name: "Karrot",
//     print: function () {
//         setTimeout(function () {
//             console.log(this);
//         }.bind(this), 2000)
//     }
// }

const obj = {
    name: "Karrot",
    print: function () {
        setTimeout(() => {
            console.log(this);
        }, 2000)
    }
}

obj.print();
