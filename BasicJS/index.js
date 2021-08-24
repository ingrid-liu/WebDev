// This is my frist Javascript code
// console.log('Hello World');


// variable: smallCamel
// variable: case-sensitive!!
let firstName = 'Ingrid ', lastName = 'Liu';
const interestRate = 0.3
// interestRate = 1;

// if don't want to reassign value to variable
// default with const, otherwise, go with let
console.log(firstName + lastName);
console.log(interestRate)

//Variable Types:
//1. Primitives/value Types -- String, Number, Boolean, underfined, null
//2. Reference Types  -- Object, Array, Function

// Primitive Types
let name = 'Mosh';    // String Literal
let age = 30;   // Number Literal
let isApproved = true; // Boolean Literal
let email = undefined;
let selectedColor = null;

// Dynamic Typing (vs Static Typing) [check type of the var in console/try to change it to different type of var]

//【OBJECT】
let person = {
    name: 'Martin',
    age:30
};

// Dot Notation
person.name='John';
// Bracket Notattion
// 1
person['name'] = 'Mary';
// 2
let selection = 'name';
person[selection] = 'Kay';
console.log(person);


//【ARRAY】
let selectedColors = ['red', 'blue'];
selectedColors[2] = 'green';
console.log(selectedColors);
console.log(selectedColors[0]);
//JS's array can store different types of variable
console.log(selectedColors.length);

//【FUNCTION】
function greet(name, lastName) {
    console.log('Hello ' + name + ' ' + lastName);
}

greet('John', 'Smith');


// ****** name: parameter; John: argument;***********
// a parameter is what we have at the time declaration
// an argument is the actual value we supply for that parameter! (e.g.  pass 'John' argument to parameter 'name')

greet('Mary', 'Cook');


//type of functions
// Performing a task↑

// Calculating a value
function square(number) {
    return number * number;
}

let number = square(2);
console.log(number);
console.log(square(3));
