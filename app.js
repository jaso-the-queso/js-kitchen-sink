// #3
let myName = "Jason";

// #4
const STATE_AMOUNT =  50;

// #5
let x = 5 + 4;

// #6-7

let letterL = "l";
let l = letterL.charCodeAt(0);

let letterJ = "j";
let j = letterJ.charCodeAt(0);

if (j < l) {
    alert("Next!");
} else {
    alert("Back of the line!");
}

// #8-9
function sayHello() {
    alert("Hello World!");
}
sayHello();

// #10-11
function checkAge(name, age) {
    if (age < 21) {
        alert("Sorry " + name + ", you aren't old enough to view this page!");
    } else if (age >= 21) {
        alert(name + ", Welcome to the page!");
    } 
}

checkAge("Charles", 21);
checkAge("Abby", 27);
checkAge("James", 18);
checkAge("John", 17);

// #12-13
let favVeg = ["Cauliflower", "Corn", "Carrots"];

for (let x = 0; x < favVeg.length; x++) {
    console.log(favVeg[x]);
}

// #14-15
let friends = [
    {
        name: "Katie",
        age: 26
    },
    {
        name: "Nick",
        age: 25
    },
    {
        name: "Stephen",
        age: 30
    },
    {
        name: "Vicka",
        age: 22
    },
    {
        name: "Will",
        age: 20
    }
];

for (let x = 0; x < friends.length; x++) {
    checkAge(friends[x].name, friends[x].age);
}

// #16-18
function getLength(word) {
    return word.length; 
}

console.log(getLength("Hello World"));

let helloWorld = getLength("Hello World");
if (helloWorld % 2 === 0) {
    console.log("The world is nice and even!");
} else {
    console.log("The world is an odd place!");
}