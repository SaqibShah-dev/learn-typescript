"use strict";
// TypeScript's literal types allow developers to specify exact values for variables,
//  function parameters, or properties, enhancing type safety by ensuring variables can
//  only hold predefined values.
// Allow variables to have specific, exact values.
// Enhance code reliability by restricting permissible values.
let direction = "up"; // this variable can ONLY ever be the exact string "up"
// How it works
// The difference between a general type and a literal type
let a = "hello"; // "string" — could be ANY string
a = "anything at all"; // ✅ fine — general type allows any string value
// single literal
let b = "hello"; // "hello" — the literal type itself
let move = "up"; // ✅
console.log("direction : ", move);
move = "left"; // ✅
console.log("direction update : ", move);
// move = "diagonal";              // ❌ Error — not one of the 4 exact allowed values
let myDir = "left";
console.log("my direction : ", myDir);
let diceChange = 1;
console.log("dice change : ", diceChange);
diceChange = 6;
console.log("dice change : ", diceChange);
// Why let and const infer literal types differently
function setStatus(s) {
    console.log(s);
}
let status1 = "active";
// setStatus(status1); // ❌ TypeScript ERROR here — this happens at compile time, in your editor/tsc, before running
const status2 = "active";
setStatus(status2); // ✅ No error — compiles fine
