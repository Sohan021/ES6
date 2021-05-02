console.log("Part-1------")
let a, b, rest;

[a, b] = [10, 20];

console.log(a);

console.log(b);

[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log("rest:",rest);

///*******/
console.log("Part-2-------")
const props = [1, 2, 3, 4, 5];

const [, , x, y, z] = props;

console.log(x, y, z); 