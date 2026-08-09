"use strict";
// What it is type annotations
// Type annotations are how you explicitly tell TypeScript what type a value is — using
// a colon : after a variable, parameter, or return value.
let userName = "Alice";
let age = 30;
let isActive = true;
console.log("user name: ", userName);
console.log("user age: ", age);
console.log("user is active: ", isActive);
// You're already writing JS like this every day:
let myAge = 30;
console.log("user age: ", myAge);
// TypeScript just adds : number after age so the compiler knows — and enforces — that 
// age must always stay a number.
// How it works
// At compile time (before your code even runs), TypeScript checks every place a typed 
// variable is used. If you try to violate the type, it throws a compile error and won't 
// let you build/run the code.
// myAge = "thirty"; // ❌ Error: Type 'string' is not assignable to type 'number'
// console.log("user age: ", myAge);
// The 3 places you'll annotate types most
// 1. Variables
let username = "dev123";
console.log("new user Name: ", username);
let isUserAvailable = true;
console.log("Is user available: ", isUserAvailable);
// 2. Function parameters & return values (this is where it matters most)
function getUser(id) {
    return `User-${id}`;
}
// id: number → the input must be a number
// : string after () → the function must return a string
console.log(getUser(1));
let myID = 34;
console.log(getUser(myID));
// let myID2:string = "34";
// console.log(getUser(myID2)); // ❌ Error: Argument of type 'string' is not assignable to parameter of type 'number'.
