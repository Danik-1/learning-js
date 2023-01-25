//My javascript tutorial
"use strict";

console.log("hello", "world"); //console output

//Variable scopes
var num1 = 1; //global
let num2 = 2; // local
const num3 = 3; //local unchangable
// num4 = 4 // could not be used in strict mode

//Basic data types
const number = 1;
const bigInteger = 12345678901234567890n;
const string = "string" + 'string' + `string ${number}`;
const boolean = true;
const array = [1, 2, 3, 4, 5];
const object = { name: "name", age: 1 };
function name(params) {
    return params;
}
const nullValue = null;
const undefinedValue = undefined;

// JS is not strict typed language
let variable = 1 / 0; // Infinity (number)
variable = true;
variable = "string" / 2; // NaN (number)
console.log(typeof variable);

//Math operators
num2 += (num1 + num3);
num2 -= (num1 - num3);
num2 %= (num1 % num3);
num2 *= (num1 * num3);
num2 /= (num1 / num3);
num1++;
++num1;
num2--;
--num2;

// Math functions
Math.abs(-1); //absolute value
Math.ceil(1.1); //round up
Math.floor(1.9); //round down
Math.max(1, 2, 3, 4, 5); //max value
Math.min(1, 2, 3, 4, 5); //min value
Math.pow(2, 3); //power
Math.random() //random number
Math.round(1.5); //round
Math.sqrt(4); //square root

// Logical operator
let condition = (1 <= 2) && (3 >= 1);
condition = (1 < 2) || (3 > 1);
condition = !(1 < 2) ^ (3 > 1);
condition = (1 == '1') && (1 != '2'); // with cast
condition = (1 === '1') && (1 !== '2'); // without cast

// Conditional operators
const age = 30;
if (18 < age < 65) {
    console.log("You are old enough");
} else if (age > 65) {
    console.log("You are too old");
} else {
    console.log("You are too young");
}

const hungry = true;
const action = hungry ? "eat" : "do not eat";

const weather = "sunny";
switch (weather) {
    case "sunny":
        console.log("wear sunglasses");
        break;
    case "rainy":
        console.log("bring umbrella");
        break;
    default:
        console.log("wear jacket");
}

// Loops
let num = 5;
while (num < 10) {
    num++;
}

do {
    num++;
} while (num < 15);

let j = 0;
firstLoop: for (; j < 10; j += 2) {
    secondLoop: while (true) {
        for (let i = 0; i < 10; ++i) {
            num++;

            if (i == 5) {
                continue;
            }
            if (i == 6) {
                continue firstLoop;
            }
            if (i == 7) {
                break;
            }
            if (i == 8) {
                break secondLoop;
            }
        }
    }
}

// Functions
function printSum(a, b) {
    console.log(a + b);
}
function getSum(a = 0, b = 0) {
    return a + b;
}

const empty = function () { return; };

const sum = (a, b) => a + b;
const descriminant = (a, b, c) => {
    return b * b - 4 * a * c;
}

// Objects
const home = "house";
const isMarried = true;
const person = {
    name: "Sherlock",
    age: 20,
    printAge: () => console.log(this.name), // this is the main object
    adress: {
        street: "Backer Street",
        [home]: "221b", // [var] -> varValue -> toString
    },
    isMarried, // varName: varValue
}

const personsAge = person.age;
const personsStreet = person.adress[home]; // variable could be used as key only with []

person.age++; // property of const object could be changed
person = {
    name: "Abraham",
    age: 11,
    adress: {
        street: "Backer Street",
        [home]: "221b",
    },
} // const object could be changed
person["lastName"] = "Holmes"; // adding a new property

let personsHome = person?.adress?.house; // if (person.adress) -> if (person.adress.house) -> person.adress.house
const isHomeless = "adress" in person;

let person2 = person; // object isn't coppied
let person3 = Object.assign({}, person); // copy // (to, what to copy)

function InitUser(name, age) { // constructr, named with capital letter
    // this = {}; // implicit creation of empty object
    this.name = name;
    this.age = age;
    // return this; // implicit return
}

let joe = new InitUser("Joe", 33);