
function func(...rest) {
    console.log("Function:", rest);
}

func("Lisa", "Simpson", "Springfield");


const person = {
    firstName: "Fagun",
    lastName: "Molla",
    homeTown: "Nesarabad"
};

const { ...restPerson } = person;
console.log("Object:", restPerson);