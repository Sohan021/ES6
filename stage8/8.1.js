const a = 1;

const result = new Promise((resolve, reject) => {
    if (a == 1) {
        const d = {
            name: "Karrot",
            address:"Dhaka"
        }
        resolve(d)
    } else {
        reject(new Error("This is an error"));
    }
})

result
    .then((data) => {
        console.log(data.name)
        console.log(data.address)
    })
    .then((resolve) => {
        console.log("Yes")
    })
    .catch((err) => {
        console.log(err.message)
    })

//console.log("KARROT")