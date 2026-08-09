"use strict";
// What is Type Inference 
// Type inference is when TypeScript figures out the type on its own, without you writing 
// an annotation. You get all the safety of typing without typing (pun intended) : number 
// everywhere.
let age = 30; // no annotation... but TS still knows this is a number
console.log("user age: ", age);
// age = "thirty"; // ❌ Error anyway!
// Even though you never wrote : number, TypeScript looked at the value 30 on the right side 
// and inferred the type. It behaves exactly as if you'd written let age: number = 30.
// How it works
// TypeScript looks at the initial value you assign and locks the variable to that type from 
// then on.
let userName = "alice"; // inferred: string
let isAdmin = true; // inferred: boolean
let scores = [90, 85, 77]; // inferred: number[]
console.log("user name: ", userName);
console.log("is admin: ", isAdmin);
console.log("user scores: ", scores);
// Hover over any of these in VS Code and it'll show you the inferred type — TS is doing the 
// same work behind the scenes as if you'd typed it manually.
let newUser = "Alice";
console.log("user name: ", newUser);
