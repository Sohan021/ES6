let a = "Karrot"

let b = "k@mail.com"

const obj = {
    a,
    b,
    print() {
        console.log(this.a, this.b)
    }
}

obj.print();