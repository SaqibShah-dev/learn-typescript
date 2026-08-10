"use strict";
// Never & Void
// Both describe functions that don't return a usable value — but they mean very 
// different things:
// void → the function returns nothing (finishes normally, just has no meaningful return 
//     value)
// never → the function never finishes at all (either throws an error, or loops forever)
function logMessage(msg) {
    console.log(msg); // runs, completes, returns nothing useful
}
function throwError(msg) {
    throw new Error(msg); // never returns — execution stops here
}
logMessage("hello"); // ✅ works, returns nothing
// throwError("something went wrong"); // ❌ throws an error, never returns
// void — How it works
// Used for functions that do something (side effect) but don't hand back a value.
function showMessage(msg) {
    console.log(msg);
}
const result = showMessage("hi"); // result is `undefined`
console.log("result: ", result); // ✅ logs `undefined` — the function finished, 
// but returned nothing useful
// TypeScript will actually infer void automatically if you don't annotate it — same as 
// return type inference from earlier:
function Message(msg) {
    console.log(msg);
}
let res = Message("hello");
console.log("res: ", res); // ✅ logs `undefined` — the function finished,
// void vs undefined — subtle but worth knowing
function f1() { return; } // ✅ fine — void functions can return nothing
function f2() { return undefined; } // ✅ but must explicitly return undefined
let function1 = f1(); // function1 is `undefined` — the function finished, returned nothing
console.log("function1: ", function1); // ✅ logs `undefined`
let function2 = f2(); // function2 is `undefined` — the function finished, returned undefined
console.log("function2 : ", function2); // ✅ logs `undefined`
// never — How it works
// Used for functions that guarantee they will not complete normally — either they
//  always throw, or they run forever.
// Case 1: always throws
// function throwError(message: string): never {
//   throw new Error(message);
// }
// Case 2: infinite loop
function runForever() {
    while (true) {
        // never exits
    }
}
function getArea(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.side ** 2;
        default:
            const _exhaustiveCheck = shape; // ✅ if all cases handled, `shape` is `never` here
            return _exhaustiveCheck;
    }
}
function a() {
    console.log("done");
} // finishes normally ✅
function b() {
    throw new Error("fail");
} // never finishes ❌ (in a "reaches the end" sense)
const x = a(); // x: undefined
const y = b(); // unreachable — TS knows code after b() never runs
console.log("unreachable"); // TS may flag this as dead code
