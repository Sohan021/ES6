// function fstFunction() {
//     console.log("1st");
// }

// function SndFunction() {
//     setTimeout(function () {
//         console.log("2nd");
//     }, 3000);
// }

// function trdFunction() {
//     console.log("3rd")
// }

// fstFunction();
// SndFunction();
// trdFunction();

////asyncronus vs synconous

function firstFunction() {
    console.log("Hlw 1st");
}


function secondFunction(name, callback) {
    setTimeout(() => {
        console.log(`Hlw ${name}`);
        callback();
    }, 3000);
}

function third() {
    console.log(`Hlw 3rd`);
}

firstFunction();
secondFunction('2nd', third);