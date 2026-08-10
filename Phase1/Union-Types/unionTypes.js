"use strict";
// Union SVGUnitTypes
// A union type lets a variable, parameter, or property be one of several specific
//  types — using the pipe symbol | (read as "or").
let my_status;
my_status = "active"; // ✅
console.log("my_status:", my_status);
my_status = "inactive"; // ✅
console.log("my_status:", my_status);
let user1 = "pending";
console.log("user status:", user1);
user1 = "active";
console.log("user status:", user1);
// user1 = "done"; // ❌ Error — must be exactly one of the 3 allowed strings
// Union of different types
let id;
id = 101; // ✅
console.log("id:", id);
id = "abc123"; // ✅
console.log("id:", id);
let myShape1 = { kind: "circle", radius: 10 };
console.log("myShape:", myShape1);
let myShape2 = { kind: "square", side: 5 };
console.log("myShape2:", myShape2);
// Type Narrowing — how you actually use a union safely
// function printId(id: string | number) {
//   console.log(id.toUpperCase()); // ❌ Error: number doesn't have toUpperCase()
// }
// You fix this with a check — this is called narrowing:
function printId(id) {
    if (typeof id === "string") {
        console.log(id.toUpperCase()); // ✅ TS knows it's a string here
    }
    else {
        console.log(id.toFixed(2)); // ✅ TS knows it's a number here
    }
}
printId(101);
printId("abc123");
// printId(true);
// Inside each if block, TypeScript automatically narrows the type based on your check. 
// This connects directly to Type Narrowing
// Narrowing objects with in
function getArea(shape) {
    if ("radius" in shape) {
        return Math.PI * shape.radius ** 2; // TS knows it's a Circle here
    }
    return shape.side ** 2; // TS knows it's a Square here
}
console.log("Area of myShape1:", getArea(myShape1));
console.log("area of shape2 ", getArea({ kind: "circle", radius: 10 }));
