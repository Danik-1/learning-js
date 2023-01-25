//My javascript tutorial
"use strict";

console.log("hello", "world"); //console output
console.assert(false, "assertion"); // if false "assertion" is printing"

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
let variable = 1;
variable = true;
variable = "string";
console.log(typeof variable);

// numbers
const num4 = 1.2e6 + 1e-6;
const num5 = 0b11 + 0o77 + 0xff; // 0b - binary // 0o - octal // 0x - hexadecimal
const num6 = +num2.toString(2) + +num2.toString(16); // (base) // unary + converts to number

const epsilon = Number.EPSILON; // default little number
                                // used to work with inaccurate calculations
const nan = "hey" - 1; // NaN - not a number // unique value has type number
const inf = - 1 / 0 + 1 / 0; // -Inf + Inf -> NaN
const isNan = isNaN(num4); // true if NaN
const isNormalNumber = isFinite(num4); // false if NaN or +-Inf

const floatFromString = parseFloat("150.28px") // number before letters
const intFromString = parseInt("150.28px") // number before letters -> to int

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
num2.toFixed(3); // 3 digits after . // returns string

// Strings
let str1 = "hey";
const str2 = 'hey';
const str3 =
`hey ${str1}
ho ${str2}`;

const str1Length = str1.length;
const str1FirstCharacter = str1.charAt(0); // returns const
const str1lastCharacter = str1[str1.length - 1];
const substr1 = str1.slice(0, - 2); // start includes end doesn't
const substr2 = str1.slice(1); // from 1 to end

for (const char of str1) {
    console.log(char);
}

str1 = str1.toUpperCase();
str1 = str1.toLowerCase();
const indexOf = str3.indexOf("h", 3); // (substr, start index) // -1 if not found
const includes = str3.includes("h");
const startsWith = str1.startsWith("a");
const endsWith = str1.endsWith("a"); 




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

