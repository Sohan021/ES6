var person = {
    firstname: "Tom",
    lastname: "Hanks",
    func: function () {
        //return "Hello!!"
        var person = {
            firstname: "Tom",
            lastname: "Hanks",
            func: function () {
                return "Hello!!"
            },
        };
        return person;
    },


};
console.log(person.firstname)
console.log(person.lastname)
console.log(person.func())


var myCar = new Object();
myCar.make = "Ford"; 
myCar.model = "Mustang";
myCar.year = 1987;

console.log(myCar["make"])
console.log(myCar["model"])
console.log(myCar["year"])