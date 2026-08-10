"use strict";
// Arrays & Tuples
// Both are ways to type a collection of values — but they enforce different rules:
// Array → any number of items, all the same type
// Tuple → a fixed number of items, each with its own specific type and position
let scores1 = [90, 85, 77]; // Array
let point = [10, 20]; // Tuple
// Arrays — How it works
// Two equivalent syntaxes
let names = ["Alice", "Bob"];
let names2 = ["Alice", "Bob"]; // same thing, generic syntax
// string[] is more common in everyday code. Array<string> shows up more in generic-heavy
//  code 
// TypeScript enforces the element type
let scores2 = [90, 85, 77];
scores2.push(100); // ✅ fine, it's a number
// scores.push("A+");    // ❌ Error: string is not assignable to number
for (let score of scores1) {
    console.log("score: " + score);
}
for (let i = 0; i < scores2.length; i++) {
    console.log("score: " + scores2[i]);
}
for (let name of names) {
    console.log("name: " + name);
}
console.log("scores1 array : " + scores1);
console.log("scores2 array : " + scores2);
console.log("Point tuple : " + point);
console.log("names array : " + names);
console.log("names generic array : " + names2);
