// var func1 = function (value) {
//     return value;
// }

// var func2 = function (value) {
//     setTimeout(() => {
//         console.log(`Hlw Timeout`);

//     }, 3000);
//     console.log("2nd")
// }

// async function asyncawait() {
//     const c = await func1("KARROT");
//     const d = await func2(c);
//     console.log(d);
// }

// asyncawait();



let promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('Promise resolved')
    }, 2000);
});


async function asyncFunc() {

    let result = await promise;

    console.log(result);

    console.log('KARROT');
}


asyncFunc();

console.log('HLW');