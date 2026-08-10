"use strict";
// Type Alias
// A type alias lets you give a custom name to any type — not just objects. You create 
// it with the type keyword, and it can represent primitives, unions, objects, functions,
//  tuples, basically anything.
let userId = "abc123"; // same as `let userId: string = "abc123"`
let taskStatus = "pending"; // ✅
console.log("task status:", taskStatus);
// taskStatus = "done"; // ❌ Error: not one of the allowed values
taskStatus = "active"; // ✅
console.log("task status:", taskStatus);
const add = (a, b) => a + b;
console.log("Add function:", add(2, 3)); // ✅
const p = [10, 20];
console.log("Point:", p); // ✅
// Now User = { name: string; age: number }
const user2 = { name: "Alice", age: 30 };
console.log("User:", user2);
